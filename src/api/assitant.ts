import axios from 'axios';
import { VercelRequest, VercelResponse } from '@vercel/node';

interface AssistantMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

interface ThreadRunResponse {
  id: string;
  status: string;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  try {
    const AZURE_ENDPOINT = process.env.AZURE_OPENAI_ENDPOINT!;
    const API_KEY = process.env.AZURE_OPENAI_API_KEY!;
    const API_VERSION = '2024-05-01-preview';
    const ASSISTANT_ID = process.env.ASSISTANT_ID!;

    // Step 1: Create a thread
    const threadResponse = await axios.post(
      `${AZURE_ENDPOINT}/openai/assistants/threads?api-version=${API_VERSION}`,
      {},
      { headers: { 'api-key': API_KEY, 'Content-Type': 'application/json' } }
    );

    const threadId: string = threadResponse.data.id;

    // Step 2: Add user message to the thread
    await axios.post(
      `${AZURE_ENDPOINT}/openai/assistants/threads/${threadId}/messages?api-version=${API_VERSION}`,
      { role: 'user', content: prompt },
      { headers: { 'api-key': API_KEY, 'Content-Type': 'application/json' } }
    );

    // Step 3: Run the thread
    const runResponse = await axios.post<ThreadRunResponse>(
      `${AZURE_ENDPOINT}/openai/assistants/threads/${threadId}/runs?api-version=${API_VERSION}`,
      { assistant_id: ASSISTANT_ID },
      { headers: { 'api-key': API_KEY, 'Content-Type': 'application/json' } }
    );

    const runId = runResponse.data.id;

    // Step 4: Poll for completion
    let status = runResponse.data.status;
    while (['queued', 'in_progress', 'cancelling'].includes(status)) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const statusResponse = await axios.get<ThreadRunResponse>(
        `${AZURE_ENDPOINT}/openai/assistants/threads/${threadId}/runs/${runId}?api-version=${API_VERSION}`,
        { headers: { 'api-key': API_KEY, 'Content-Type': 'application/json' } }
      );
      status = statusResponse.data.status;
    }

    // Step 5: Retrieve messages if completed
    if (status === 'completed') {
      const messagesResponse = await axios.get<{ messages: AssistantMessage[] }>(
        `${AZURE_ENDPOINT}/openai/assistants/threads/${threadId}/messages?api-version=${API_VERSION}`,
        { headers: { 'api-key': API_KEY, 'Content-Type': 'application/json' } }
      );
      return res.status(200).json(messagesResponse.data);
    }

    res.status(200).json({ status });
  } catch (error: any) {
    console.error('Error communicating with Azure OpenAI:', error.response?.data || error.message);
    res.status(500).json({ error: 'Error communicating with Azure OpenAI.' });
  }
}
