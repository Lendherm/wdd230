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

document.addEventListener("DOMContentLoaded", () => {
  cargarGaleria();
  cargarCarrusel(); // Cargar el carrusel con 5 imágenes
  ajustarDisenoPantalla(); // Detectar el tamaño de la pantalla al cargar
  window.addEventListener('resize', ajustarDisenoPantalla); // Detectar cuando se cambia el tamaño de la ventana
});

let currentIndex = 0; // Índice actual del carrusel

function cargarGaleria() {
  const gallery = document.getElementById("gallery");
  const totalImages = 9;  // Número de imágenes en la galería

  for (let i = 1; i <= totalImages; i++) {
      const img = document.createElement("img");
      img.src = `https://picsum.photos/800/550?random=${i}`;
      img.alt = `Imagen ${i}`;
      gallery.appendChild(img);
  }
}

function cargarCarrusel() {
  const carouselImages = document.getElementById("carousel-images");
  const totalImages = 5; // Número de imágenes en el carrusel

  for (let i = 1; i <= totalImages; i++) {
      const img = document.createElement("img");
      img.src = `https://picsum.photos/800/550?random=${i}`;
      img.alt = `Carrusel Imagen ${i}`;
      img.classList.add("carousel-image");
      carouselImages.appendChild(img);
  }

  // Agregar funcionalidad de desplazamiento
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");

  prevButton.addEventListener("click", () => {
      if (currentIndex > 0) {
          currentIndex--;
          actualizarCarrusel();
      }
  });

  nextButton.addEventListener("click", () => {
      if (currentIndex < totalImages - 1) {
          currentIndex++;
          actualizarCarrusel();
      }
  });

  // Iniciar carrusel
  actualizarCarrusel();
}

function actualizarCarrusel() {
  const carouselImages = document.getElementById("carousel-images");
  const images = carouselImages.querySelectorAll(".carousel-image");
  const width = images[0].clientWidth;

  // Desplazamos las imágenes
  carouselImages.style.transform = `translateX(-${currentIndex * width}px)`;
}

function ajustarDisenoPantalla() {
  const container = document.getElementById('container');
  const gallery = document.getElementById('gallery');
  const mainImage = document.getElementById('main-image');
  const carouselImages = document.getElementById("carousel-images");
  const images = carouselImages.querySelectorAll(".carousel-image");

  if (window.innerWidth > 1024) {
      // Pantalla grande: diseño en fila
      container.style.flexDirection = 'row';
      gallery.style.width = '48%';
      mainImage.style.width = '48%';

      // Aseguramos que el carrusel tenga 5 imágenes visibles
      let galleryImages = gallery.querySelectorAll('img');
      galleryImages.forEach((img, index) => {
          if (index >= 9) {
              img.style.display = 'none';  // Ocultar imágenes adicionales
          } else {
              img.style.display = 'block'; // Mostrar imágenes de la galería
          }
      });
  } else {
      // Pantalla pequeña: diseño en columna
      container.style.flexDirection = 'column';
      gallery.style.width = '100%';
      mainImage.style.width = '100%';

      // Mostrar todas las imágenes de la galería
      let galleryImages = gallery.querySelectorAll('img');
      galleryImages.forEach((img) => {
          img.style.display = 'block';
      });
  }


  //FOTER

  // Esperar a que el DOM se haya cargado completamente
document.addEventListener("DOMContentLoaded", function() {
  // Obtener el año actual y mostrarlo en el pie de página
  const currentYear = new Date().getFullYear();
  document.getElementById("currentYear").textContent = currentYear;

  // Obtener la fecha de la última modificación y mostrarla en el pie de página
  const lastModifiedDate = document.lastModified;
  document.getElementById("lastModified").textContent = `Last modification: ${lastModifiedDate}`;

  // Mostrar u ocultar el menú al hacer clic en el botón hamburguesa
  document.getElementById("menu-toggle").addEventListener("click", function() {
      const nav = document.querySelector('nav ul');
      nav.classList.toggle("show");  // Alternar la clase 'show' que muestra el menú
  });
});
}
