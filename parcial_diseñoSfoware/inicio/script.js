// Selecciona el carrusel
const carrusel = document.querySelector('.carrusel');

// Función para desplazar automáticamente el carrusel
function desplazarCarrusel() {
    carrusel.scrollBy({
        left: 1,
        behavior: "smooth"
    });

    // Reinicia al inicio cuando alcanza el final
    if (carrusel.scrollLeft >= carrusel.scrollWidth - carrusel.clientWidth) {
        carrusel.scrollTo({
            left: 0,
            behavior: "smooth"
        });
    }
}

// Desplazamiento continuo cada 10 ms
setInterval(desplazarCarrusel, 10);
