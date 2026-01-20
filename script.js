// Handler untuk resize window
window.addEventListener('resize', function() {
    if (testStarted) {
        // Perbarui tampilan soal saat ini saat resize
        showQuestion(currentQuestionIndex);
    }
});

// Inisialisasi saat halaman dimuat
window.addEventListener('load', function() {
    // Pastikan kontainer utama tidak overflow
    document.body.style.overflowX = 'hidden';
    document.documentElement.style.overflowX = 'hidden';
});