let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length; // Loop back to first slide
    showSlide(currentIndex);
}

// Show the first slide initially
showSlide(currentIndex);

// Change slide every 5 seconds
setInterval(nextSlide, 3000);