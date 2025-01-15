// Esperar a que el DOM cargue
document.addEventListener("DOMContentLoaded", function () {
    // Mostrar/Ocultar el menú de hamburguesa
    document.getElementById("menu-toggle").addEventListener("click", function () {
        const nav = document.querySelector('nav ul');
        nav.classList.toggle("show");
    });

    // Mostrar/Ocultar submenús al hacer clic en el enlace
    document.querySelectorAll('.submenu-toggle').forEach(toggle => {
        toggle.addEventListener('click', function (event) {
            event.preventDefault(); // Evitar que el enlace recargue la página
            const submenu = this.nextElementSibling; // Submenú relacionado
            if (submenu) {
                submenu.classList.toggle('show-submenu'); // Alternar la clase para mostrarlo
            }
        });
    });

    // Insertar el año actual en el footer
    document.getElementById("currentYear").textContent = new Date().getFullYear();

    // Mostrar la fecha de la última modificación
    document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;
});
