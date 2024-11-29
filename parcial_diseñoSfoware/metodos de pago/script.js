// Obtener elementos del DOM
const modal = document.getElementById("modalNequi");
const closeBtn = document.querySelector(".close");

// Mostrar el modal al hacer clic en el botón de Nequi
document.querySelector('.boton-pago.nequi').addEventListener('click', function () {
    modal.style.display = "flex";
});

// Cerrar el modal al hacer clic en la 'X'
closeBtn.addEventListener('click', function () {
    modal.style.display = "none";
});

// Cerrar el modal al hacer clic fuera del contenido del modal
window.addEventListener('click', function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Mensaje para pago con tarjeta
document.querySelector('.boton-pago.tarjeta').addEventListener('click', function () {
    alert("Pago con tarjeta aún no disponible");
});

// Redirección a PayPal
document.querySelector('.boton-pago.paypal').addEventListener('click', function () {
    window.location.href = "https://www.paypal.com/pay";
});
