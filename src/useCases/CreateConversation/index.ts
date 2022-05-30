import { CreateConversationController } from './CreateConversationController';
import { WatsonAssistantProvider } from "../../providers/Implementations/WatsonAssistantProvider";
import { CreateConversationUseCase } from "./CreateConversationUseCase";

const watsonAssistantProvider = new WatsonAssistantProvider();

const createConversationUseCase = new CreateConversationUseCase(watsonAssistantProvider);

const createConversationController = new CreateConversationController(createConversationUseCase);

export { createConversationUseCase, createConversationController};