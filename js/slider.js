document.addEventListener("DOMContentLoaded", () => {
  const slidesContainer = document.querySelector(".slides");
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".arrow.prev");
  const nextBtn = document.querySelector(".arrow.next");
  const dotsContainer = document.querySelector(".dots");

  let currentIndex = 0;
  const totalSlides = slides.length;

  // Si no hay slides, cancelamos la ejecución para evitar errores
  if (totalSlides === 0) return;

  // 1. Generar los puntos (dots) dinámicamente según la cantidad de slides reales
  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement("button");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active"); // El primero inicia activo
    
    // Evento al clickear un punto específico
    dot.addEventListener("click", () => {
      goToSlide(i);
    });
    
    dotsContainer.appendChild(dot);
  }

  const dots = document.querySelectorAll(".dot");

  // 2. Función principal para desplazar el slider
  function goToSlide(index) {
    if (index < 0) {
      currentIndex = totalSlides - 1; // Si vas atrás del primero, va al último
    } else if (index >= totalSlides) {
      currentIndex = 0; // Si pasas del último, reinicia al primero
    } else {
      currentIndex = index;
    }

    // Movemos el contenedor usando transformaciones de CSS
    slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Actualizar estados visuales de los puntos
    dots.forEach((dot, i) => {
      if (i === currentIndex) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  }

  // 3. Listeners para controlar las flechas
  prevBtn.addEventListener("click", () => goToSlide(currentIndex - 1));
  nextBtn.addEventListener("click", () => goToSlide(currentIndex + 1));
});
