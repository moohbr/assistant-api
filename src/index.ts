import express from 'express';
import cors from 'cors';
import routes from './routes';
import dotenv from 'dotenv';
import endpoint from './config/Endpoint.config';
import bodyParser from 'body-parser';

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(routes);

app.listen(endpoint.port, () => {
    console.log(`Server running on port ${endpoint.port}`);
    console.log(`Host running on ${endpoint.host}`);
    if (process.env.DEBUG === 'true' ){
        if (process.env.NODE_ENV === 'development') {
            console.log('Development mode');
        } else {
            console.log('Production mode');
        }
    console.log(`Environment: ${process.env.NODE_ENV}`);
    console.log(endpoint);
    }
});