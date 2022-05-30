import { SendMessageController } from './SendMessageController';
import { WatsonAssistantProvider } from "../../providers/Implementations/WatsonAssistantProvider";
import { SendMessageUseCase } from "./SendMessageUseCase";

const watsonAssistantProvider = new WatsonAssistantProvider();

const sendMessageUseCase = new SendMessageUseCase(watsonAssistantProvider);

const sendMessageController = new SendMessageController(sendMessageUseCase);

export { sendMessageUseCase, sendMessageController};