import {IEmail, IEmailCredentials} from "./interfaces/email.interfaces";
import {createTransport} from "nodemailer";

export default class Email implements IEmail {
    
    private transporter: any
    private readonly host: string
    private readonly port: number
    private readonly secure: boolean
    private auth: IEmailCredentials
    
    constructor() {
        this.host = process.env.EMAIL_HOST ? process.env.EMAIL_HOST : "UNAVAILABLE",
            this.port = process.env.EMAIL_PORT ? Number(process.env.EMAIL_PORT) : 0,
            this.secure = process.env.EMAIL_SECURE ? Boolean(process.env.EMAIL_SECURE) : true,
            this.auth = {
                user: process.env.EMAIL_USER ? process.env.EMAIL_USER : "UNAVAILABLE",
                pass: process.env.EMAIL_PASS ? process.env.EMAIL_PASS : "UNAVAILABLE"
            }
    }
    
    mainTransporter() {
        
        this.transporter = createTransport({
            host: this.host,
            port: this.port,
            secure: false,
            auth: {
                user: this.auth.user,
                pass: this.auth.pass
            }
        })
        
    }
    
    async sendEmail(from: string, to: string, subject: string, text: string, html: string): Promise<any> {
        
        let info = this.transporter.sendMail(
            {
                from,
                to,
                subject,
                text,
                html
            }
        )
        
        return info
    }
    
}