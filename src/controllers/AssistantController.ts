import { Request, Response } from 'express';
import AssistantService from '../services/WatsonAssistantService';
import assistantConfig from '../config/WatsonAssistant.config';

if (process.env.DEBUG === 'true') {
    console.log('AssistantController.ts');
    console.log(assistantConfig);
}

export default {
  async newSession(req: Request, res: Response) {
    const assistantService = new AssistantService();
      const response = await assistantService.createSession({
        auth: {
          assistant_id: assistantConfig.assistant_id,
          api_key: assistantConfig.api_key,
          url: assistantConfig.url,
          version: assistantConfig.version,
          workspace_id: assistantConfig.workspace_id,
        }
      });
      if (process.env.DEBUG === 'true') {
        console.log('AssistantController.ts - newSession');
        console.log(response.result);
      }
      let responseObject = {
        Text: response.result.output.text,
        User_id: response.result.user_id,
      };
      console.log('AssistantController.ts - createSession');
      console.log(responseObject);
      res.send(responseObject);
  },

  async userInput(req: Request, res: Response) {
    const assistantService = new AssistantService();
    console.log('AssistantController.ts - userInput');
    console.log(req.body);
      const response = await assistantService.userInput({
        auth: {
          assistant_id: assistantConfig.assistant_id,
          api_key: assistantConfig.api_key,
          url: assistantConfig.url,
          version: assistantConfig.version,
          workspace_id: assistantConfig.workspace_id,
        },
        query: {
          request_body: {
            input: {
              text: req.body.Text[0],
            },
          },
          user_id: req.body.User_id,
        },
      });
      if (process.env.DEBUG === 'true') {
        console.log('AssistantController.ts - userInput');
        console.log(response.result);
      }
      let responseObject = {
        Text: response.result.output.text,
        User_id: response.result.user_id,
      };
      console.log('AssistantController.ts - userInput');
      console.log(responseObject);
      res.send(responseObject);
  }
};
