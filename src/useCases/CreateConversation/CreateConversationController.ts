import { CreateConversationUseCase } from './CreateConversationUseCase';
import {Request, Response} from 'express';

export class CreateConversationController {
    constructor(
        private createConversationUseCase: CreateConversationUseCase,
    ){};
    
    async handle(request: Request, response: Response): Promise<Response>{
            let response_object = await this.createConversationUseCase.execute();
            return response.json(response_object);
    }
}