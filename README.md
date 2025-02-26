# 🚀 Chrome QR Code Generator Extension

Bu proje, **Google Chrome Uzantısı** olarak çalışan bir **QR Kod Üretici**dir.  
Kullanıcı, bir **bağlantı girerek** anında QR kod oluşturabilir ve **indirebilir**.

## 🎯 Özellikler
✅ **Bağlantıyı QR koda dönüştürme**  
✅ **Oluşturulan QR kodu indirme**  
✅ **Şık ve kullanıcı dostu arayüz**  
✅ **Node.js backend kullanarak QR kod üretme**

---

## 📺 Proje Yapısı

```
qr-code-extension/
│── backend/          # Node.js Backend (QR Kod API)
│   ├── server.js     # Express API (QR kod üretiyor)
│   └── package.json  # Bağımlılıklar
│── extension/        # Chrome Uzantısı (Frontend)
│   ├── manifest.json # Chrome Extension yapılandırması
│   ├── popup.html    # Kullanıcı arayüzü
│   ├── popup.js      # QR kod oluşturma işlemleri
│   └── icon.png      # Uzantı ikonu
│── README.md         # Proje dokümentasyonu
```

---

## 🚀 Kurulum & Çalıştırma

### **1⃣ Backend (Node.js) Kurulumu**
Öncelikle **Node.js'in yüklü** olduğundan emin olun.

#### **📌 Gerekli bağımlılıkları yükleyin:**
```sh
cd backend
npm install
```

#### **📌 Sunucuyu çalıştırın:**
```sh
node server.js
```
💪 **Başarıyla çalışıyorsa:**  
Sunucu şu adreste çalışacaktır: **http://localhost:3000**

💪 **Test için:**  
Tarayıcıdan şu URL’ye gidin:  
➡️ **`http://localhost:3000/generate?url=https://google.com`**  
Bir QR kod base64 formatında dönecektir.

---

### **2⃣ Chrome Uzantısını (Frontend) Kurma**
1. Google Chrome'da `chrome://extensions/` adresine gidin.
2. **Geliştirici Modu'nu açın.**
3. **"Paketlenmemiş uzantıyı yükle"** butonuna tıklayın.
4. **"extension/"** klasörünü seçin.
5. Uzantıyı açıp **bağlantı girerek QR kod oluşturun!** 🎉

---

## 🖥️ Kullanım
1. **Chrome uzantısını açın.**
2. **Bağlantıyı girin.**
3. **"QR Kod Üret" butonuna basın.**
4. **Oluşan QR kodu indirin veya kullanın.** 🚀

---

## 🔧 Gereksinimler
- **Google Chrome** (Geliştirici Modu açık olmalı)
- **Node.js** (Backend sunucu için)
- **npm** (Bağımlılıklar için)

---

## 🌟 Katkıda Bulunun
Bu projeye katkıda bulunmak istiyorsanız, **pull request** açabilirsiniz! 🌟

