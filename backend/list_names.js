import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function listModels() {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    const ai = new GoogleGenAI({ apiKey });
    const models = await ai.models.list();
    models.forEach(m => console.log(m.name));
  } catch (err) {
    console.error(err);
  }
}

listModels();
