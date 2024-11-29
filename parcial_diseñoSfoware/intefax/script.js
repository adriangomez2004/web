let currentIndex = 0;
const tutorCards = document.querySelectorAll('.tutor-card');
const totalCards = tutorCards.length;
const cardsPerView = 5;
const carouselContainer = document.querySelector('.carousel-container');

// Mostrar solo 5 cartas a la vez
function updateCarousel() {
    const offset = -currentIndex * (tutorCards[0].offsetWidth + 20); // 20 es el espacio entre cartas
    carouselContainer.style.transform = `translateX(${offset}px)`;
}

// Cambiar de tutor
function nextSlide() {
    if (currentIndex < totalCards - cardsPerView) {
        currentIndex++;
    } else {
        currentIndex = 0; // Volver al inicio
    }
    updateCarousel();
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalCards - cardsPerView; // Volver al final
    }
    updateCarousel();
}

// Automáticamente mover el carrusel cada 3 segundos
setInterval(nextSlide, 3000);

// Control de botones (si se quieren agregar botones de navegación)
document.querySelector('.next-btn').addEventListener('click', nextSlide);
document.querySelector('.prev-btn').addEventListener('click', prevSlide);

// Inicializar el carrusel al principio
updateCarousel();
