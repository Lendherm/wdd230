// Obtener los elementos del DOM
const menuToggle = document.getElementById('menu-toggle');
const sideMenu = document.getElementById('side-menu');
const overlay = document.getElementById('overlay');

// Mostrar el menú y el overlay
menuToggle.addEventListener('click', () => {
    sideMenu.classList.toggle('open'); // Abre o cierra el menú
    overlay.classList.toggle('active'); // Muestra u oculta el overlay
});

// Cerrar el menú al hacer clic en el overlay
overlay.addEventListener('click', () => {
    sideMenu.classList.remove('open'); // Cierra el menú
    overlay.classList.remove('active'); // Oculta el overlay
});

// Cerrar el menú al hacer clic en un enlace dentro del menú
document.querySelectorAll('.side-menu a').forEach(link => {
    link.addEventListener('click', () => {
        sideMenu.classList.remove('open'); // Cierra el menú
        overlay.classList.remove('active'); // Oculta el overlay
    });
});


//main

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
