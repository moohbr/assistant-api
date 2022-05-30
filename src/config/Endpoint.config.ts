import * as dotenv from 'dotenv';

dotenv.config();

export default {
  port: process.env.VCAP_PORT ?? 3000, // VCAP_PORT if running on Cloud Foundry
  host: process.env.VCAP_HOST ?? 'localhost', // VCAP_HOST if running on Cloud Foundry
};
