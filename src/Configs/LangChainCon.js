import { ChatOpenAI } from "@langchain/openai";
export const chatModel = new ChatOpenAI({
    openAIApiKey: import.meta.env.VITE_OPENAI_API_KEY
})