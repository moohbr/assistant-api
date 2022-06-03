import AssistantV1 from 'ibm-watson/assistant/v1';
import { IamAuthenticator } from 'ibm-watson/auth';
import {
  IWatsonAssistantProvider,
  IMessageDTO,
  IResponseDTO,
} from '../IWatsonAssistantProvider';
import wAssistantConfig from '../../config/WatsonAssistant.config';

export class WatsonAssistantProvider implements IWatsonAssistantProvider {
  private assistant: AssistantV1;  
  private response_object: IResponseDTO;

  constructor() {
    this.assistant = new AssistantV1({
      version: wAssistantConfig.version, 
      authenticator: new IamAuthenticator({
        apikey: wAssistantConfig.api_key,
      }),
      serviceUrl: wAssistantConfig.url, 
    });
    this.response_object = { // Default response, case error
      message:
        'Unexpected error. Please try again later. The Watson Assistant service is not available.',
      user_id: '', // Doesn't matter, if it's empty, it will be ignored
    };
  }

  async createSession(): Promise<IResponseDTO> {
    await this.assistant
      .message({
        workspaceId: wAssistantConfig.workspace_id,
        input: { text: '' }, // Empty text to create a new session
      })
      .then((response) => {
        this.response_object = {
          message: response.result.output.text,
          user_id: response.result.user_id,
        };
        return this.response_object;
      })
      .catch((error) => {
        console.log(error);
        const response_object = {
          message: 'Query error. Please fix the query and try again.',
        };
        return response_object;
      });
    return this.response_object;
  }

  async sendMessage(request: IMessageDTO): Promise<IResponseDTO> {
    await this.assistant
      .message({
        workspaceId: wAssistantConfig.workspace_id,
        userId: request.query.user_id,
        input: { text: request.query.request_body.input.text }, // Text to send to Watson Assistant
      })
      .then((response) => {
        this.response_object = {
          message: response.result.output.text,
          user_id: response.result.user_id,
        };
        return this.response_object;
      })
      .catch((error) => {
        console.log(error);
        const response_object = {
          message: 'Query error. Please fix the query and try again.',
        };
        return response_object;
      });
    return this.response_object;
  }
}
