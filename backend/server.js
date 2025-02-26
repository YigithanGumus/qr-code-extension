const express = require("express");
const QRCode = require("qrcode");

const app = express();
const PORT = 3000;

// CORS izinlerini aç (Chrome uzantısı backend'e erişebilsin)
app.use((req, res, next) => {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET");
res.header("Access-Control-Allow-Headers", "Content-Type");
next();
});

// QR Kod oluşturma endpoint'i
app.get("/generate", async (req, res) => {
const { url } = req.query;

if (!url) {
return res.status(400).json({ error: "Lütfen bir URL girin." });
}

try {
const qrCodeData = await QRCode.toDataURL(url);
res.json({ qrCode: qrCodeData });
} catch (err) {
res.status(500).json({ error: "QR kod oluşturulamadı." });
}
});

// Sunucuyu başlat
app.listen(PORT, () => {
console.log(`🚀 Sunucu http://localhost:${PORT} adresinde çalışıyor.`);
});
