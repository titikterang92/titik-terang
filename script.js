// script.js

let currentIndex = 0;
const slides = document.querySelectorAll('.slider .slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
}

showSlide(currentIndex);
setInterval(nextSlide, 5000); // Ganti slide setiap 5 detik
