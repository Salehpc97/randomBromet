export default async (req, res) => {
    const { prompt, maxTokens, temperature } = req.body;
  
    const geminiPayload = {  // البنية التي يتوقعها Gemini
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig: { maxOutputTokens: maxTokens, temperature }
    };
  
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(geminiPayload)  // نرسل البنية الصحيحة لـ Gemini
      }
    );
    // ... باقي الكود
  };