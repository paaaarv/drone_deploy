from fastapi import FastAPI, HTTPException
import os
import json
from dotenv import load_dotenv
import openai
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

load_dotenv()

with open("./drone_data.json", 'r') as f: 
    drone_data = json.load(f)

app = FastAPI()
app.add_middleware(
    CORSMiddleware, 
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

client = openai.OpenAI(api_key=os.environ.get("OPENAI_API_KEY"))



class Query(BaseModel):
    text: str

class AIResponse(BaseModel):
    response: str



async def generate_ai_response():
    test_query = "What is the altitude of the fifth image?"
    try:
        prompt = f"""You are an AI assistant with access to drone flight data. 
        Use the following data to answer the query: {json.dumps(drone_data)}
        
        Query: {test_query}
        
        Provide a response based only on the given drone data."""

        response = client.chat.completions.create(
    model="gpt-3.5-turbo",  # or another appropriate model
    messages=[
        {"role": "user", "content": prompt},
        {"role": "user", "content": test_query}
    ]
)
        return AIResponse(response=response.choices[0].message.content)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/")
async def root():
    try:
        ai_response = await generate_ai_response()
        return {"response": ai_response.response}
    except Exception as e:
        return {"error": f"API connection failed: {str(e)}"}
     
    except Exception as e:
        print(f"API connection failed: {str(e)}")

@app.post("/ai/generate", response_model=AIResponse)
async def ai_generate(query: Query):
    return await generate_ai_response(query)
