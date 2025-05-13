// api.ts — API bağlantıları örnek fonksiyonlarla

const API_KEY = ""; // 🔐 Buraya kendi API key'inizi girin

export const fetchStockDepth = async (symbol: string) => {
  const url = `https://api.example.com/depth?symbol=${symbol}&apikey=${API_KEY}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export const fetchTradingViewEmbed = (symbol: string) => {
  return `https://s.tradingview.com/widgetembed/?symbol=${symbol}&interval=60&theme=dark`;
};

export const fetchAKDData = async (symbol: string) => {
  const url = `https://api.example.com/akd?symbol=${symbol}&apikey=${API_KEY}`;
  const res = await fetch(url);
  return await res.json();
};

export const fetchTakasData = async (symbol: string) => {
  const url = `https://api.example.com/takas?symbol=${symbol}&apikey=${API_KEY}`;
  const res = await fetch(url);
  return await res.json();
};

export const fetchNews = async () => {
  const url = `https://api.example.com/news?apikey=${API_KEY}`;
  const res = await fetch(url);
  return await res.json();
};

export const fetchStockPrice = async (symbol: string) => {
  const url = `https://api.example.com/price?symbol=${symbol}&apikey=${API_KEY}`;
  const res = await fetch(url);
  return await res.json();
};