import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function listModels() {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    const ai = new GoogleGenAI({ apiKey });
    
    console.log("Listing models...");
    // The unified SDK might have a different way to list models
    // Let's try the direct fetch if the SDK doesn't expose it clearly
    const models = await ai.models.list();
    console.log("Available Models:");
    console.log(JSON.stringify(models, null, 2));
  } catch (err) {
    console.error("List Models Error:", err);
  }
}

listModels();
