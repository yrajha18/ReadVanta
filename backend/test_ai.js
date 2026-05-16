import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function testAI() {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    const ai = new GoogleGenAI({ apiKey });
    
    console.log("Attempting with gemini-flash-latest...");
    const response = await ai.models.generateContent({
      model: 'gemini-flash-latest',
      contents: "Say hello!",
    });

    console.log("Success!");
    console.log(response.text);
  } catch (err) {
    console.error("Test Error:", err.message);
  }
}

testAI();
