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

export { routes };