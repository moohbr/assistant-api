import { SendMessageUseCase } from './SendMessageUseCase';
import {Request, Response} from 'express';

export class SendMessageController {
    constructor(
        private createConversationUseCase: SendMessageUseCase,
    ){};
    
    async handle(request: Request, response: Response): Promise<Response>{
        const message = {
            query: {
                request_body: {
                    input: {
                        text: request.body.message[0]
                    }
                },
                user_id: request.body.user_id
            }
        };
        let response_object = await this.createConversationUseCase.execute(message);
        return response.json(response_object);
    }
}