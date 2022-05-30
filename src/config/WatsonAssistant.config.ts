import * as dotenv from 'dotenv';

dotenv.config();

const VCAP_SERVICES_JSON = process.env.VCAP_SERVICES ?? ''; // VCAP_SERVICES if running on Cloud Foundry
const VCAP_SERVICES = JSON.parse(VCAP_SERVICES_JSON) ?? {}; // VCAP_SERVICES if running on Cloud Foundry

export default {
  assistant_id: process.env.WATSON_ASSISTANT_WORKSPACE_ID ?? '', 
  api_key: VCAP_SERVICES['conversation'][0]['credentials']['apikey'] ?? '',
  url: VCAP_SERVICES['conversation'][0]['credentials']['url'] ?? '',
  version: process.env.WATSON_ASSISTANT_VERSION ?? '',
  workspace_id: process.env.WATSON_ASSISTANT_WORKSPACE_ID ?? '',
};
