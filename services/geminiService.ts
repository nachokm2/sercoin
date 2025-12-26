
import { GoogleGenAI } from "@google/genai";

export const getGeminiResponse = async (userPrompt: string) => {
  // El entorno garantiza que process.env.API_KEY esté disponible.
  const apiKey = process.env.API_KEY;
  
  if (!apiKey) {
    return "Error de configuración: API Key no encontrada.";
  }

  const ai = new GoogleGenAI({ apiKey });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userPrompt,
      config: {
        systemInstruction: "Eres un asistente experto de Sercoin Ltda, una empresa chilena de ingeniería y servicios industriales especializada en mantenimiento industrial, obras civiles, estructuras metálicas y montajes. Tu tono es profesional, técnico y servicial. Responde siempre en español de Chile de forma concisa y útil.",
        temperature: 0.7,
      }
    });

    return response.text || "No pude procesar la respuesta industrial en este momento.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Hubo un inconveniente técnico al contactar al asistente. Por favor, intente más tarde.";
  }
};
