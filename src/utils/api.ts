// src/utils/api.ts
import axios from 'axios';

const azureOpenAIEndpoint = process.env.REACT_APP_AZURE_OPENAI_ENDPOINT;
const apiKey = process.env.REACT_APP_AZURE_API_KEY;

if (!azureOpenAIEndpoint || !apiKey) {
  console.error('Azure OpenAI endpoint or API key is not set in environment variables.');
}

export const sendMessageToAzure = async (message: string) => {
  const requestBody = {
    messages: [{ role: 'user', content: message }],
    max_tokens: 150,
    temperature: 0.7,
    top_p: 0.95,
  };

  try {
    const response = await axios.post(azureOpenAIEndpoint, requestBody, {
      headers: {
        'Content-Type': 'application/json',
        'api-key': apiKey,
      },
    });
    return response.data.choices?.[0]?.message?.content || 'No response from assistant.';
  } catch (error) {
    console.error('Error sending message to AI:', error);
    throw new Error('Failed to fetch response from AI.');
  }
};
