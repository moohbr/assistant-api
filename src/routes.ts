import { createConversationController } from './useCases/CreateConversation/index';
import { Router } from 'express';
import { sendMessageController } from './useCases/SendMessage/index';

const routes = Router();

routes.post('/conversation', (request, response) => {
  sendMessageController.handle(request, response);
});

routes.get('/conversation', (request, response) => {
  createConversationController.handle(request, response);
});

routes.get('/', (request, response) => {
  response
    .status(200)
    .send({
      api: 'assistant-api',
      version: '1.0.1',
      author: 'Matheus Araujo',
      email: 'matheus.araujo@kukac.com.br',
      github: '/moohbr',
    });
});

export { routes };
