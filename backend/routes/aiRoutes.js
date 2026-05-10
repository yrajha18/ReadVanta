import express from "express";
import { GoogleGenAI } from "@google/genai";

const router = express.Router();

// Generate AI Summary for a Book
router.post("/summary", async (req, res) => {
  try {
    const { title, author, description } = req.body;
    
    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({ message: "Gemini API key not configured" });
    }

    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const prompt = `Provide a short, engaging 2-paragraph summary and analysis of the book "${title}" by ${author}. Context: ${description}`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    res.json({ summary: response.text });
  } catch (err) {
    console.error("AI Summary Error:", err);
    res.status(500).json({ message: "Error generating summary" });
  }
});

// General AI Chat
router.post("/chat", async (req, res) => {
  try {
    const { prompt } = req.body;
    
    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({ message: "Gemini API key not configured" });
    }

    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const systemInstruction = "You are a helpful AI assistant for Readvanta, an app for book lovers. Answer questions related to books, authors, and reading recommendations. Keep answers engaging and concise.";
    
    const finalPrompt = `${systemInstruction}\n\nUser: ${prompt}`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: finalPrompt,
    });

    res.json({ reply: response.text });
  } catch (err) {
    console.error("AI Chat Error:", err);
    res.status(500).json({ message: "Error generating AI response" });
  }
});

export default router;
