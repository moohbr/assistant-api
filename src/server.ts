import endpoint from './config/Endpoint.config';
import { app } from './app';


app.listen(endpoint.port as number, endpoint.host, () => {
    console.log(`Listening at http://${endpoint.host}:${endpoint.port}` + '\n')
   })