import os
import time
from openai import AzureOpenAI
from fastapi import FastAPI, HTTPException, Request

# Initialize FastAPI
app = FastAPI()

# Azure OpenAI setup
client = AzureOpenAI(
    azure_endpoint=os.getenv("AZURE_OPENAI_ENDPOINT"),
    api_key=os.getenv("AZURE_OPENAI_API_KEY"),
    api_version="2024-05-01-preview"
)

assistant = client.beta.assistants.create(
    model="gpt-4",
    instructions="You are a helpful chatbot that assists users effectively.",
    tools=[{"type": "file_search", "file_search": {"ranking_options": {"ranker": "default_2024_08_21", "score_threshold": 0}}}],
    tool_resources={"file_search": {"vector_store_ids": ["vs_0vkE3bKUlN6izdlL8BOKsyFY"]}},
    temperature=1,
    top_p=1
)

@app.post("/chat")
async def chat_with_assistant(request: Request):
    try:
        data = await request.json()
        user_message = data.get("message", "")

        if not user_message:
            raise HTTPException(status_code=400, detail="Message is required.")

        # Create a thread
        thread = client.beta.threads.create()

        # Add user message
        client.beta.threads.messages.create(
            thread_id=thread.id,
            role="user",
            content=user_message
        )

        # Run the assistant
        run = client.beta.threads.runs.create(
            thread_id=thread.id,
            assistant_id=assistant.id
        )

        # Poll for status
        status = run.status
        while status in ['queued', 'in_progress', 'cancelling']:
            time.sleep(1)
            run = client.beta.threads.runs.retrieve(
                thread_id=thread.id,
                run_id=run.id
            )
            status = run.status

        # Retrieve messages
        if status == 'completed':
            messages = client.beta.threads.messages.list(thread_id=thread.id)
            assistant_message = messages.messages[-1].content
            return {"response": assistant_message}
        elif status == 'requires_action':
            raise HTTPException(status_code=400, detail="Assistant requires further actions.")
        else:
            raise HTTPException(status_code=500, detail=f"Thread failed with status: {status}")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
