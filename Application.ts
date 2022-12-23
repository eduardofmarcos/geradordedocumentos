// import Database from './Database';
import Server from './Server';
import mongoose from "mongoose";

export default class Application {
    
    #server: Server
    #ready: boolean
    #callbacks: Function[] = []
    #connection: mongoose.Connection
    
    constructor() {
        
        this.#server = new Server();
        
    }
    
    get server() {
        
        return this.#server
        
    }
    
    get connection() {
        
        return this.#connection
        
    }
    
    onReady(callback: Function) {
        /* istanbul ignore if */
        if (this.#ready) return callback
        
        this.#callbacks.push(callback)
        
    }
}