interface IMessageRequest{
    input:{
      text: string;
    }
}
  
interface IAssistantQuery {
    request_body: IMessageRequest;
    user_id: string;
}
  
export interface IMessageDTO {
    query: IAssistantQuery;
} 

export interface IResponseDTO{
    message: string;
    user_id: string;
}

export interface IWatsonAssistantProvider {
    createSession(): Promise<IResponseDTO>;
    sendMessage(request: IMessageDTO): Promise<IResponseDTO>;
}