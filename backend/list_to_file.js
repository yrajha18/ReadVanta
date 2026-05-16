import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

async function listModels() {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    const ai = new GoogleGenAI({ apiKey });
    const result = await ai.models.list();
    fs.writeFileSync("models_output.json", JSON.stringify(result, null, 2));
    console.log("Wrote models to models_output.json");
  } catch (err) {
    console.error(err);
  }
}

listModels();
