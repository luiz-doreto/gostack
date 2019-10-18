import express from 'express';
import routes from './routes';

import './database';

/**
 * @author Luiz Doreto <luiz.doreto14@gmail.com>
 * @since 2019-10-18
 */
class App {
    constructor() {
        this.server = express();

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.server.use(express.json());
    }

    routes() {
        this.server.use(routes);
    }
}

export default new App().server;
