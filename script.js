let currentSlide = 0;
const slides = document.querySelectorAll('.image-item');
const totalSlides = slides.length;

function showSlide(index) {
    const carousel = document.getElementById('carousel');
    // Assuming each image is full width of the container
    const offset = index * -100;
    carousel.style.transform = `translateX(${offset}%)`;
    currentSlide = index;
}

function moveSlide(direction) {
    let newSlideIndex = currentSlide + direction;
    if (newSlideIndex < 0) newSlideIndex = totalSlides - 1;
    if (newSlideIndex >= totalSlides) newSlideIndex = 0;
    showSlide(newSlideIndex);
}

// Initial setup
showSlide(currentSlide);