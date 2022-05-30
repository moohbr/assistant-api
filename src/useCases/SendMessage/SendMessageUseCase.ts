import { IMessageDTO, IResponseDTO, IWatsonAssistantProvider } from './../../providers/IWatsonAssistantProvider';

export class SendMessageUseCase {    
    constructor(
        private watsonAssistantProvider: IWatsonAssistantProvider,
    ){};

    async execute(message: IMessageDTO): Promise<IResponseDTO> {
        return await this.watsonAssistantProvider.sendMessage(message);
    }
}