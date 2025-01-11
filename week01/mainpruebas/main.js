document.addEventListener("DOMContentLoaded", () => {
    cargarGaleria();
    cargarImagenPrincipal();
});

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

function cargarImagenPrincipal() {
    const mainImage = document.getElementById("main-image");
    const img = document.createElement("img");
    img.src = "https://picsum.photos/800/550?random=1";  // Imagen principal
    img.alt = "Imagen Principal";
    mainImage.appendChild(img);
}
SS