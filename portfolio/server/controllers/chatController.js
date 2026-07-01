import { GoogleGenerativeAI } from "@google/generative-ai";
import asyncHandler from "../middleware/asyncHandler.js";
import { PORTFOLIO_CONTEXT } from "../utils/seedData.js";

export const sendChatMessage = asyncHandler(async (req, res) => {
  const { message, history = [] } = req.body;

  if (!message?.trim()) {
    res.status(400);
    throw new Error("Message is required");
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    res.status(503);
    throw new Error("Chat service is not configured");
  }

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: PORTFOLIO_CONTEXT,
  });

  const apiHistory = history.map((m) => ({
    role: m.role === "model" ? "model" : "user",
    parts: [{ text: m.text }],
  }));

  const chat = model.startChat({
    history: apiHistory,
    generationConfig: { maxOutputTokens: 200 },
  });

  const result = await chat.sendMessage(message);
  const text = result.response.text();

  res.json({ success: true, reply: text });
});
