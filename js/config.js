const CONFIG = {
    PROXY_URL: process.env.NODE_ENV === 'development' 
        ? "http://localhost:3000/api/gemini-proxy" 
        : "https://your-vercel-app.vercel.app/api/gemini-proxy"
};
window.CONFIG = CONFIG;