import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function performAdvancedSearch(query: string, context: any) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are an advanced search assistant for OmniHub. 
      The user is asking: "${query}"
      Current dashboard context: ${JSON.stringify(context)}
      
      Analyze the query and provide:
      1. A concise answer or summary.
      2. Suggested actions (e.g., "Zoom to Jakarta on map", "Filter stats by region").
      3. Any relevant insights from the data.
      
      Format the response as a clean, helpful summary.`,
    });
    return response.text;
  } catch (error) {
    console.error("Search error:", error);
    return "Maaf, terjadi kesalahan saat melakukan pencarian AI.";
  }
}
