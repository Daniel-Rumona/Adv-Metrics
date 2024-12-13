import { VercelRequest, VercelResponse } from "@vercel/node";
import { AzureOpenAI } from "openai";
import dotenv from "dotenv";

dotenv.config();

const azureOpenAIKey = process.env.AZURE_OPENAI_KEY;
const azureOpenAIEndpoint = process.env.AZURE_OPENAI_ENDPOINT;
const azureOpenAIVersion = "2024-05-01-preview";

if (!azureOpenAIKey || !azureOpenAIEndpoint) {
  throw new Error("AZURE_OPENAI_KEY or AZURE_OPENAI_ENDPOINT is not set in environment variables.");
}

const client = new AzureOpenAI({
  endpoint: azureOpenAIEndpoint,
  apiVersion: azureOpenAIVersion,
  apiKey: azureOpenAIKey,
});

const runAssistant = async (message: string): Promise<string> => {
  try {
    // Create a thread
    const assistantThread = await client.beta.threads.create({});

    // Add user message
    await client.beta.threads.messages.create(assistantThread.id, {
      role: "user",
      content: message,
    });

    // Run the thread
    const runResponse = await client.beta.threads.runs.create(assistantThread.id, {
      assistant_id: "asst_xUlnddezzjo9i7bqfJAQNSB9", // Replace with your Assistant ID
    });

    let runStatus = runResponse.status;
    while (runStatus === "queued" || runStatus === "in_progress") {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const statusResponse = await client.beta.threads.runs.retrieve(
        assistantThread.id,
        runResponse.id
      );
      runStatus = statusResponse.status;
    }

    if (runStatus === "completed") {
      const messagesResponse = await client.beta.threads.messages.list(assistantThread.id);
      const assistantMessage =
        messagesResponse.messages[messagesResponse.messages.length - 1].content;
      return assistantMessage;
    } else {
      throw new Error(`Assistant run failed with status: ${runStatus}`);
    }
  } catch (error: any) {
    console.error(`Error running assistant: ${error.message}`);
    throw error;
  }
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === "POST") {
    try {
      const { message } = req.body;
      if (!message) {
        return res.status(400).json({ error: "Message is required." });
      }
      const assistantResponse = await runAssistant(message);
      res.status(200).json({ message: assistantResponse });
    } catch (error: any) {
      console.error("Error in /api/run-assistant:", error.message);
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: "Method not allowed. Use POST." });
  }
}
