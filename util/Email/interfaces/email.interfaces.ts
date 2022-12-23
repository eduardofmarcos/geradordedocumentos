export interface ITransporter {
    
    host: string,
    port: number,
    secure: boolean,
    auth: IEmailCredentials
    
    
}

export interface IEmailCredentials {
    
    user: string
    pass: string
    
}

export interface ISendTo {
    
    from: string,
    subject: string,
    text: string,
    html: string
    
}

export interface IEmail {
    
    mainTransporter(): void
    
    sendEmail(from: string, to: string, subject: string, text: string, html: string): Promise<any>
    
}