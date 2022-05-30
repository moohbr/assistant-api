interface IMessageRequest { // RequestBody in query
  input: {
    text: string;
  };
}

interface IAssistantQuery { // Query to Watson Assistant
  request_body: IMessageRequest;
  user_id: string;
}

export interface IMessageDTO { // Input to Watson Assistant
  query: IAssistantQuery;
}

export interface IResponseDTO { // Response from Watson Assistant
  message: string;
  user_id: string;
}

export interface IWatsonAssistantProvider {
  createSession(): Promise<IResponseDTO>; // Create a new session with Watson Assistant
  sendMessage(request: IMessageDTO): Promise<IResponseDTO>; // Send a message to Watson Assistant
}
