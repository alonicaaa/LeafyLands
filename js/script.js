
// Script untuk toggle menu hamburger
    document.addEventListener('DOMContentLoaded', function() {
        const hamburger = document.querySelector('.hamburger');
        const menu = document.querySelector('.menu');

        hamburger.addEventListener('click', function() {
            menu.classList.toggle('active'); // Toggle class 'active' pada menu
        });
    });



//Bagian Kontak//
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah formulir terkirim

    // Ambil data dari form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Tampilkan pesan konfirmasi
    alert(`Terima kasih, ${name}! Kami telah menerima pesan Anda: "${message}". Kami akan menghubungi Anda di ${email} secepatnya.`);

    // Kosongkan form setelah pengiriman
    document.getElementById('contactForm').reset();
});







