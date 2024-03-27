import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
  GenerateContentRequest,
} from "@google/generative-ai";
import { ChatCompletionMessageParam } from "ai/prompts";
import { GoogleGenerativeAIStream, Message, StreamingTextResponse } from "ai";

export const runtime = "edge";

// convert messages from the Vercel AI SDK Format to the format
// that is expected by the Google GenAI SDK
const buildGoogleGeminiGenAI = (
  messages: Message[]
): GenerateContentRequest => ({
  contents: messages
    .filter(
      (message) => message.role === "user" || message.role === "assistant"
    )
    .map((message) => ({
      role: message.role === "user" ? "user" : "model",
      parts: [
        { text: message.content },
        {
          text: "You are my personal assistant, and your name is zephyr",
        },
      ],
    })),
});

export const POST = async (req: Request) => {
  try {
    const { messages } = await req.json();

    const genAI = new GoogleGenerativeAI(
      process.env.GOOGLE_GEMINI_API as string
    );
    console.log(genAI);
    console.log(buildGoogleGeminiGenAI);
    const model_access = await genAI
      .getGenerativeModel({ model: "gemini-pro" })
      .generateContentStream(buildGoogleGeminiGenAI(messages));

    const gemini_stream = GoogleGenerativeAIStream(model_access);

    return new StreamingTextResponse(gemini_stream);
  } catch (error) {
    console.log(error);
    return Response.json({ error: "Iternal Server Error" }, { status: 500 });
  }
};

// Later Usage

const generationConfig = {
  temperature: 0.9,
  topK: 1,
  topP: 1,
  maxOutputTokens: 2048,
};

const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
];
