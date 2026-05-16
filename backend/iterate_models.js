import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function listModels() {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    const ai = new GoogleGenAI({ apiKey });
    
    console.log("Iterating models...");
    for await (const model of ai.models.list()) {
        if (model.name.includes("flash")) {
            console.log(model.name);
        }
    }
  } catch (err) {
    console.error(err);
  }
}

listModels();
