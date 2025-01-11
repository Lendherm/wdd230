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
        const imgContainer = document.createElement("div");
        imgContainer.classList.add("gallery-item");
        
        const img = document.createElement("img");
        img.src = `https://picsum.photos/800/550?random=${i}`;
        img.alt = `Imagen ${i}`;
        
        const link = document.createElement("a");
        link.href = "#";  // Aquí puedes poner el enlace que quieras
        link.classList.add("gallery-link");
        
        const linkText = document.createElement("span");
        linkText.classList.add("gallery-link-text");
        linkText.innerText = "Link";
        
        link.appendChild(linkText);
        imgContainer.appendChild(img);
        imgContainer.appendChild(link);
        gallery.appendChild(imgContainer);
    }
}

function cargarCarrusel() {
    const carouselImages = document.getElementById("carousel-images");
    const totalImages = 5; // Número de imágenes en el carrusel

    // Limpiar el carrusel de imágenes previas
    carouselImages.innerHTML = '';

    for (let i = 1; i <= totalImages; i++) {
        const imgContainer = document.createElement("div");
        imgContainer.classList.add("carousel-item");
        
        const img = document.createElement("img");
        img.src = `https://picsum.photos/800/550?random=${i}`;
        img.alt = `Carrusel Imagen ${i}`;
        img.classList.add("carousel-image");
        
        const link = document.createElement("a");
        link.href = "#";  // Aquí puedes poner el enlace que quieras
        link.classList.add("carousel-link");
        
        const linkText = document.createElement("span");
        linkText.classList.add("carousel-link-text");
        linkText.innerText = "Link";
        
        link.appendChild(linkText);
        imgContainer.appendChild(img);
        imgContainer.appendChild(link);
        carouselImages.appendChild(imgContainer);
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
    const images = carouselImages.querySelectorAll(".carousel-item");
    const width = images[0].clientWidth; // Obtenemos el ancho de una imagen

    // Desplazamos las imágenes
    carouselImages.style.transform = `translateX(-${currentIndex * width}px)`;
}

function ajustarDisenoPantalla() {
    const container = document.getElementById('container');
    const gallery = document.getElementById('gallery');
    const mainImage = document.getElementById('main-image');
    const carouselImages = document.getElementById("carousel-images");
    const images = carouselImages.querySelectorAll(".carousel-item");

    if (window.innerWidth > 1024) {
        // Pantalla grande: diseño en fila
        container.style.flexDirection = 'row';
        gallery.style.width = '48%';
        mainImage.style.width = '48%';

        // Ajustamos el tamaño del carrusel
        let width = carouselImages.offsetWidth;
        let totalImages = images.length;
        carouselImages.style.width = `${totalImages * width}px`;
    } else {
        // Pantalla pequeña: diseño en columna
        container.style.flexDirection = 'column';
        gallery.style.width = '100%';
        mainImage.style.width = '100%';
    }
}
