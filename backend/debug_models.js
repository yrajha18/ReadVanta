import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function debugModels() {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    const ai = new GoogleGenAI({ apiKey });
    const result = await ai.models.list();
    
    console.log("Keys in result:", Object.keys(result));
    if (result.models) {
        console.log("result.models is array?", Array.isArray(result.models));
        console.log("First model name:", result.models[0]?.name);
    } else if (Array.isArray(result)) {
        console.log("result is array. First model name:", result[0]?.name);
    }
  } catch (err) {
    console.error(err);
  }
}

debugModels();
