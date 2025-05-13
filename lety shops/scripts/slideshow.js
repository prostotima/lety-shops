let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
    slides.forEach(slide => slide.style.display = "none");  
    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Автопереключение каждые 3 секунды
}

function changeSlide(n) {
    slideIndex += n;
    if (slideIndex < 1) slideIndex = slides.length;
    if (slideIndex > slides.length) slideIndex = 1;
    slides.forEach(slide => slide.style.display = "none");
    slides[slideIndex - 1].style.display = "block";
}

showSlides(); // Запуск слайд-шоу
