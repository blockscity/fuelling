import http from 'http';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import middleware from './middleware';
import api from './api';
import blockchain from './blockchain';
import config from './config.json';

let app = express();
app.server = http.createServer(app);

// logger
app.use(morgan('dev'));

// 3rd party middleware
app.use(cors({
    exposedHeaders: config.corsHeaders
}));

app.use(bodyParser.json({
    limit: config.bodyLimit
}));

// connect to db
try {
    blockchain(config).then(bc => {
        // internal middleware
        app.use(middleware({config, bc}));
        // api router
        app.use('/', api({config, bc}));

        app.server.listen(process.env.PORT || config.port, () => {
            console.log(`Started on port ${app.server.address().port}`);
        });
    });

} catch (e) {
    console.error(e);
}

export default app;
