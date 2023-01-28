// import express from 'express';
// import history from 'connect-history-api-fallback';
// import {delimitator} from './middlewares/Delimitator';
// import {logger} from './util/Logger/Logger';
// import open_routes from './routes/v1/Open';
// import rest_open_routes from './REST/routes/v2/Open'
// import protected_routes from './routes/v1/Protected'
// import rest_protected_routes from './REST/routes/v2/Protected'
// import {errorHandling} from "./middlewares/ErrorHandler";
// import cors from 'cors'

import express from 'express';
import cors from 'cors'
import open_routes from './routes/v1/Open';
import history from 'connect-history-api-fallback';
import {delimitator} from './middlewares/Delimitator';
import {logger} from './util/Logger/Logger';
import {errorHandling} from "./middlewares/ErrorHandler";


export default class Server {
    
    private logger = logger;
    private _server_app;
    
    constructor() {
        
        const app = express();
        
        const port = process.env.PORT || /* istanbul ignore next */ 9400;
        
        app.use(history({htmlAcceptHeaders: ['text/html', 'application/xhtml+xml']}));
        
        app.use(delimitator);
        
        /* istanbul ignore if */
        
        if (process.env.NODE_ENV === 'development') app.use(cors({credentials: true, origin: "*"}));
        
        // app.use(function (req: any, res, next) {
        //     req.filter = QueryBuilder.buildQueryFromArray(req.query.filter)
        //     next();
        // });
        
        app.use('/api/v1', open_routes)
        // app.use('/api/v1', protected_routes)
        
        
        this._server_app = app.listen(9400, () => this.logger.system('DocGenerator listening on port: ' + port));
        
        app.use(errorHandling);
        
    }
    
    private _app: express.Express
    
    get app(): express.Express {
        
        return this._app
        
    }
    
    killServer(): void {
        
        this._server_app.close()
        
    }
}