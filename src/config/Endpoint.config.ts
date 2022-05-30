import * as dotenv from "dotenv";

dotenv.config();

export default{
    port: process.env.VCAP_PORT ?? 3000,
    host: process.env.VCAP_HOST ?? 'localhost',
}