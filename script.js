document.getElementById('submit-btn').addEventListener('click', function(event) {
    event.preventDefault();

    const kapasitasBeban = document.getElementById('kapasitas-beban').value;
    const panjangKabel = document.getElementById('panjang-kabel').value;
    const tegangan = document.getElementById('tegangan').value;

    // Simulasi chatbot response
    if (kapasitasBeban && panjangKabel && tegangan) {
        const rekomendasiKabel = pilihKabel(kapasitasBeban, panjangKabel, tegangan);
        tampilkanChatbotResponse(rekomendasiKabel);
    } else {
        tampilkanChatbotResponse('Silakan masukkan semua data yang diminta.');
    }
});

function pilihKabel(kapasitasBeban, panjangKabel, tegangan) {
    // Data kabel
    const dataKabel = [
        { "id": 1, "nama": "Kabel 2.5 mm²", "kapasitas": "600 Watt", "tegangan": "220V", "panjang_max": "30 meter", "gambar": "img/kabel2.5mm2.jpg" },
        { "id": 2, "nama": "Kabel 4 mm²", "kapasitas": "1000 Watt", "tegangan": "220V", "panjang_max": "50 meter", "gambar": "img/kabel4mm2.jpg" },
        { "id": 3, "nama": "Kabel 6 mm²", "kapasitas": "1500 Watt", "tegangan": "220V", "panjang_max": "70 meter", "gambar": "img/kabel6mm2.jpg" },
        { "id": 4, "nama": "Kabel 10 mm²", "kapasitas": "3000 Watt", "tegangan": "220V", "panjang_max": "100 meter", "gambar": "img/kabel10mm2.jpg" },
        { "id": 5, "nama": "Kabel 16 mm²", "kapasitas": "5000 Watt", "tegangan": "220V", "panjang_max": "150 meter", "gambar": "img/kabel16mm2.jpg" }
    ];

    // Menyaring kabel berdasarkan kapasitas dan panjang
    const rekomendasi = dataKabel.filter(kabel => {
        return kapasitasBeban <= kabel.kapasitas.replace(' Watt', '') && panjangKabel <= kabel.panjang_max.replace(' meter', '');
    });

    if (rekomendasi.length > 0) {
        return rekomendasi;
    } else {
        return null;
    }
}

function tampilkanChatbotResponse(rekomendasi) {
    const chatBody = document.getElementById('chat-body');

    // Jika tidak ada rekomendasi
    if (!rekomendasi) {
        const botMessage = document.createElement('div');
        botMessage.classList.add('chat-message', 'bot');
        botMessage.innerHTML = `<div class="message">Maaf, tidak ada kabel yang cocok dengan data yang Anda masukkan.</div>`;
        chatBody.appendChild(botMessage);
    } else {
        // Menampilkan rekomendasi kabel
        rekomendasi.forEach(kabel => {
            const botMessage = document.createElement('div');
            botMessage.classList.add('chat-message', 'bot');

            botMessage.innerHTML = `
                <div class="message">
                    <p><strong>${kabel.nama}</strong></p>
                    <p>Kapasitas: ${kabel.kapasitas}</p>
                    <p>Panjang Maksimal: ${kabel.panjang_max}</p>
                </div>
                <img src="${kabel.gambar}" alt="${kabel.nama}" class="chat-image" />
            `;
            chatBody.appendChild(botMessage);
        });
    }

    // Scroll otomatis ke bawah
    chatBody.scrollTop = chatBody.scrollHeight;
}
