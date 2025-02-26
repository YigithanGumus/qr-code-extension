document.getElementById("generate").addEventListener("click", async function () {
    let url = document.getElementById("urlInput").value.trim();

    if (!url) {
        alert("Lütfen bir bağlantı girin!");
        return;
    }

    try {
        let response = await fetch(`http://localhost:3000/generate?url=${encodeURIComponent(url)}`);
        let data = await response.json();

        if (data.qrCode) {
            let qrContainer = document.getElementById("qrcode");
            qrContainer.innerHTML = `<img src="${data.qrCode}" alt="QR Kod">`;

            let downloadBtn = document.getElementById("download");
            downloadBtn.style.display = "block";
            downloadBtn.onclick = () => downloadQRCode(data.qrCode);
        }
    } catch (err) {
        alert("QR kod oluşturulamadı!");
    }
});

function downloadQRCode(qrDataUrl) {
    let link = document.createElement("a");
    link.href = qrDataUrl;
    link.download = "qr_code.png";
    link.click();
}
