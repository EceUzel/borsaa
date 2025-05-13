// Gerekli modülleri import et
const express = require('express');
const cors = require('cors');
const TelegramBot = require('node-telegram-bot-api'); // Telegram Bot API kütüphanesi

// Express uygulamasını oluştur
const app = express();
const PORT = process.env.PORT || 3001;

// --- TELEGRAM BOT AYARLARI ---
// BotFather'dan aldığınız API token'ınızı buraya girin.
// GERÇEK UYGULAMADA BU TOKEN'I .env DOSYASINDAN OKUYUN!
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || "7563609991:AAGD-Faa053FPEIhYQVLfg-rcSuMzKqMtVA"; // Sizin verdiğiniz token
// Mini App'inizin Vercel'de yayınlandığı URL'yi buraya girin.
const MINI_APP_URL = process.env.MINI_APP_URL || "https://sizin-miniapp-urlniz.vercel.app"; // DEĞİŞTİRİN!

// Bot'u oluştur
// Polling (geliştirme için) veya Webhook (canlı ortam için) kullanabilirsiniz.
// Şimdilik polling ile başlayalım, daha sonra webhook'a geçebilirsiniz.
const bot = new TelegramBot(TELEGRAM_BOT_TOKEN, { polling: true });

console.log('Telegram Botu başlatıldı ve mesajları dinliyor...');

// Middleware'ler
app.use(cors());
app.use(express.json());

// --- API ANAHTARLARI (Diğer API'ler için) ---
// const BIST_API_KEY = process.env.BIST_API_KEY;
// ... diğer API anahtarlarınız ...

// --- TELEGRAM BOT KOMUTLARI ---

// /start komutuna yanıt ver
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const userName = msg.from.first_name || "Kullanıcı";

    const welcomeMessage = `Merhaba ${userName}! BorsaLive Mini App'e hoş geldiniz.\n\nUygulamayı açmak için aşağıdaki butonu kullanabilirsiniz.`;

    // Mini App'i açacak inline buton oluştur
    const options = {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: '📊 BorsaLive Uygulamasını Aç',
                        web_app: { url: MINI_APP_URL } // Mini App URL'niz
                    }
                ]
            ]
        }
    };

    bot.sendMessage(chatId, welcomeMessage, options);
    console.log(`/start komutu alındı. Yanıt gönderildi: ${chatId}`);
});

// Diğer bot komutları veya mesaj işleyicileri buraya eklenebilir.
// Örneğin, belirli bir hisse kodunu mesaj olarak aldığında Mini App'in o hisse detay sayfasını açmasını sağlayabilirsiniz.
// bot.on('message', (msg) => {
//   const chatId = msg.chat.id;
//   if (msg.text.toString().toLowerCase().includes('merhaba')) {
//     bot.sendMessage(chatId, 'Merhaba! Nasıl yardımcı olabilirim? Mini App için /start yazabilirsiniz.');
//   }
// });


// --- API ENDPOINT'LERİ (Frontend'inize veri sağlamak için) ---
// Bu endpoint'ler önceki gibi kalacak.

// **1. Piyasa Verileri **
app.get('/api/market/depth/:symbol', async (req, res) => {
    // ... (önceki derinlik endpoint kodu) ...
    const symbol = req.params.symbol.toUpperCase();
    const simulatedDepthData = { /* ... */ };
    res.json(simulatedDepthData);
});

app.get('/api/market/trades/:symbol', async (req, res) => {
    // ... (önceki son işlemler endpoint kodu) ...
    const symbol = req.params.symbol.toUpperCase();
    const simulatedTradesData = [ /* ... */ ];
    res.json(simulatedTradesData);
});

// ... Diğer tüm API endpoint'leriniz (Teorik, AKD, Takas, Halka Arzlar, Haberler, Bülten, Analiz vb.) ...
// ... Önceki yanıtlardaki gibi buraya eklenecek ...


// Sunucuyu başlat (HTTP API endpoint'leri için)
app.listen(PORT, () => {
    console.log(`BorsaLive Backend (HTTP API) sunucusu http://localhost:${PORT} adresinde çalışıyor.`);
});

// Bot hatalarını yakala
bot.on('polling_error', (error) => {
    console.error("Telegram Bot Polling Hatası:", error.code, "-", error.message);
});

bot.on('webhook_error', (error) => {
    console.error("Telegram Bot Webhook Hatası:", error.code, "-", error.message);
});

console.log("Backend sunucusu ve Telegram botu başlatılma süreci tamamlandı.");
