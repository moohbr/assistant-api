import { IResponseDTO, IWatsonAssistantProvider } from './../../providers/IWatsonAssistantProvider';

export class CreateConversationUseCase {    
    constructor(
        private watsonAssistantProvider: IWatsonAssistantProvider,
    ){};

    async execute(): Promise<IResponseDTO> {
        return await this.watsonAssistantProvider.createSession();
    }
}