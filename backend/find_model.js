import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function findModel() {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    const ai = new GoogleGenAI({ apiKey });
    const result = await ai.models.list();
    const models = result.models || result;
    
    console.log("Looking for 1.5-flash...");
    const flashModels = models.filter(m => m.name.includes("1.5-flash"));
    console.log("Found:", flashModels.map(m => m.name));
    
    console.log("\nLooking for 2.0-flash...");
    const flash2Models = models.filter(m => m.name.includes("2.0-flash"));
    console.log("Found:", flash2Models.map(m => m.name));

    console.log("\nLooking for any flash...");
    const allFlash = models.filter(m => m.name.includes("flash"));
    console.log("Found:", allFlash.map(m => m.name));

  } catch (err) {
    console.error(err);
  }
}

findModel();
