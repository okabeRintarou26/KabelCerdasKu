document.getElementById('submit-btn').addEventListener('click', function(event) {
    event.preventDefault();

    const userInput = document.getElementById('user-input').value.toLowerCase();

    if (userInput) {
        // Mengirim pertanyaan dan menunggu respons pengguna
        if (userInput.includes("ukuran kabel") || userInput.includes("kabel untuk beban") || userInput.includes("1300 watt")) {
            tampilkanChatbotResponse("Untuk beban 1300 watt, Anda perlu menentukan tegangan sistem. Apakah Anda menggunakan 220V atau 380V?");
            setNextStep('tegangan');
        } else if (userInput.includes("220v") || userInput.includes("220 volt")) {
            tampilkanChatbotResponse("Untuk tegangan 220V dengan beban 1300 watt, kami rekomendasikan kabel 4 mm², dengan panjang maksimal 50 meter.");
            resetChat();
        } else if (userInput.includes("380v") || userInput.includes("380 volt")) {
            tampilkanChatbotResponse("Untuk tegangan 380V dengan beban 1300 watt, kami rekomendasikan kabel 6 mm², dengan panjang maksimal 70 meter.");
            resetChat();
        } else {
            tampilkanChatbotResponse("Maaf, saya tidak mengerti pertanyaan Anda. Silakan coba lagi.");
        }
    }
});

// Fungsi untuk menampilkan pesan dari chatbot
function tampilkanChatbotResponse(message) {
    const chatBody = document.getElementById('chat-body');
    const botMessage = document.createElement('div');
    botMessage.classList.add('chat-message', 'bot');
    botMessage.innerHTML = `<div class="message">${message}</div>`;
    chatBody.appendChild(botMessage);

    // Scroll otomatis ke bawah
    chatBody.scrollTop = chatBody.scrollHeight;
}

// Fungsi untuk mengatur langkah percakapan selanjutnya
function setNextStep(step) {
    document.getElementById('submit-btn').addEventListener('click', function(event) {
        const userInput = document.getElementById('user-input').value.toLowerCase();

        if (step === 'tegangan' && (userInput.includes("220v") || userInput.includes("220 volt"))) {
            tampilkanChatbotResponse("Untuk tegangan 220V dengan beban 1300 watt, kami rekomendasikan kabel 4 mm², dengan panjang maksimal 50 meter.");
        } else if (step === 'tegangan' && (userInput.includes("380v") || userInput.includes("380 volt"))) {
            tampilkanChatbotResponse("Untuk tegangan 380V dengan beban 1300 watt, kami rekomendasikan kabel 6 mm², dengan panjang maksimal 70 meter.");
        }
        resetChat();
    });
}

// Fungsi untuk mereset chat setelah memberikan jawaban
function resetChat() {
    document.getElementById('user-input').value = '';
    setTimeout(() => {
        const chatBody = document.getElementById('chat-body');
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 100);
}
