// Animación suave al hacer scroll
const secciones = document.querySelectorAll("section");
const options = {
threshold: 0.1,
};

const aparecer = new IntersectionObserver(function (entradas, observer) {
entradas.forEach(entrada => {
    if (!entrada.isIntersecting) return;
    entrada.target.classList.add("visible");
    observer.unobserve(entrada.target);
});
}, options);

secciones.forEach(sec => {
sec.classList.add("oculto");
aparecer.observe(sec);
});
