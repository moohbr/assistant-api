import AssistantV1 from 'ibm-watson/assistant/v1';
import { IamAuthenticator } from 'ibm-watson/auth';

interface IAssistantAuth {
  assistant_id: string;
  api_key: string;
  url: string;
  version: string;
  workspace_id: string;
}

interface IMessageRequest{
  input:{
    text: string;
  }
}

interface IAssistantQuery {
  request_body: IMessageRequest;
  user_id: string;
}

interface IMessageDTO {
  auth: IAssistantAuth;
  query: IAssistantQuery;
}

interface INewMessageDTO{
  auth: IAssistantAuth;
}

interface IAssistantService {
  createSession(request: INewMessageDTO): Promise<any>;
  userInput(request: IMessageDTO): Promise<any>;
}

class AssistantService implements IAssistantService {
  async createSession(request: INewMessageDTO): Promise<any> {
    return new Promise((resolve, reject) => {
    const assistant = new AssistantV1({
      version: request.auth.version,
      authenticator: new IamAuthenticator({
        apikey: request.auth.api_key,
      }),
      serviceUrl: request.auth.url,
    });
    assistant.message({
      workspaceId: request.auth.workspace_id,
      input: {'text': ''}
      }
    ).then(response => {
      if (process.env.DEBUG === 'true') {
        console.log('AssistantService.ts - createSession');
        console.log(response.result);
      }
        resolve(response);
      })
      .catch(error => {
        reject(error);
        console.log(error);
      }
    );
  });
}

  async userInput(request: IMessageDTO): Promise<any> {
    return new Promise((resolve, reject) => {
    const assistant = new AssistantV1({
      version: request.auth.version,
      authenticator: new IamAuthenticator({
        apikey: request.auth.api_key,
      }),
      serviceUrl: request.auth.url,
    });
    assistant.message({
      workspaceId: request.auth.workspace_id,
      input: {'text': request.query.request_body.input.text},
      context: {'user_id': request.query.user_id},
      userId: request.query.user_id
      }
    ).then(response => {
      if (process.env.DEBUG === 'true') {
        console.log('AssistantService.ts - userInput');
        console.log(response.result);
      }
        resolve(response);
      })
      .catch(error => {
        reject(error);
        console.log(error);
      }
    );
  });
}
}

export default AssistantService;