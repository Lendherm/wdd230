// Esperar a que el DOM cargue
document.addEventListener("DOMContentLoaded", function () {
    // Mostrar/Ocultar el menú de hamburguesa
    document.getElementById("menu-toggle").addEventListener("click", function () {
        const nav = document.querySelector("nav ul");
        nav.classList.toggle("show");
    });

    // Mostrar/Ocultar submenús al hacer clic en el enlace
    document.querySelectorAll(".submenu-toggle").forEach((toggle) => {
        toggle.addEventListener("click", function (event) {
            event.preventDefault(); // Evitar que el enlace recargue la página
            const submenu = this.nextElementSibling; // Submenú relacionado
            if (submenu) {
                submenu.classList.toggle("show-submenu"); // Alternar la clase para mostrarlo
            }
        });
    });

    // Insertar el año actual en el footer
    document.getElementById("currentYear").textContent = new Date().getFullYear();

    // Mostrar la fecha de la última modificación
    document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

    // Modo oscuro
    const modeButton = document.querySelector("#mode");
    const body = document.querySelector("body");
    modeButton.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        modeButton.textContent = body.classList.contains("dark-mode") ? "🔆" : "🌙";
    });

    // Lazy loading de imágenes
    const images = document.querySelectorAll("img.lazyload");
    const config = {
        rootMargin: "0px 0px 200px 0px", // Cargar imágenes 200px antes de que lleguen al viewport
        threshold: 0,
    };

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.getAttribute("data-src"); // Establecer el atributo src con data-src
                    img.classList.add("loaded"); // Agregar clase para la animación
                    console.log(`Imagen cargada: ${img.alt}`); // Mensaje en consola
                    observer.unobserve(img); // Dejar de observar la imagen cargada
                }
            });
        }, config);

        images.forEach((image) => observer.observe(image)); // Iniciar la observación
    } else {
        // Fallback si IntersectionObserver no está disponible
        console.warn(
            "IntersectionObserver no es compatible con este navegador. Cargando todas las imágenes inmediatamente."
        );
        images.forEach((image) => {
            image.src = image.getAttribute("data-src");
            image.classList.add("loaded");
            console.log(`Imagen cargada inmediatamente: ${image.alt}`);
        });
    }
});
