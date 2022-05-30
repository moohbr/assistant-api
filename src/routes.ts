import { Router } from 'express';
import AssistantController from './controllers/AssistantController';

const routes = Router();

routes.get('/conversation', AssistantController.newSession);
routes.post('/conversation', AssistantController.userInput);


export default routes;