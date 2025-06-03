export default async (req, res) => {
    // 1. Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Content-Type', 'application/json');
  
    // 2. Handle OPTIONS (Preflight request)
    if (req.method === 'OPTIONS') {
      return res.status(200).end();
    }
  
    // 3. Only allow POST requests
    if (req.method !== 'POST') {
      return res.status(405).json({ 
        error: "Method not allowed",
        details: "Only POST requests are accepted"
      });
    }
  
    try {
      // 4. Parse the request body
      const { prompt } = req.body;
      if (!prompt) {
        return res.status(400).json({ 
          error: "Missing required field",
          details: "The 'prompt' field is required"
        });
      }
  
      // 5. Check if API key is set
      if (!process.env.GEMINI_API_KEY) {
        throw new Error("Gemini API key is missing. Set GEMINI_API_KEY in environment variables.");
      }
  
      // 6. Call Gemini API
      const geminiResponse = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_KEY}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ role: "user", parts: [{ text: prompt }] }]
          })
        }
      );
  
      // 7. Handle Gemini response
      if (!geminiResponse.ok) {
        const errorData = await geminiResponse.text();
        throw new Error(`Gemini API error: ${errorData}`);
      }
  
      const data = await geminiResponse.json();
      return res.status(200).json(data);
  
    } catch (error) {
      console.error("Proxy Error:", error);
      return res.status(500).json({ 
        error: "Internal Server Error",
        details: error.message,
        type: "gemini_proxy_error"
      });
    }
  };
  