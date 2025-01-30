document.addEventListener("DOMContentLoaded", function () {
    // Obtener el botón de Afiliación
    const affiliateButton = document.querySelector(".affiliate-button");

    // Verificar si el botón de afiliación se ha detectado
    if (affiliateButton) {
        console.log("Botón de afiliación detectado.");
    } else {
        console.log("No se detectó el botón de afiliación.");
    }

    // Crear el contenedor del formulario como un menú lateral
    const formContainer = document.createElement("div");
    formContainer.id = "affiliate-form-container";
    formContainer.classList.add("side-menu", "p-4", "bg-light", "position-fixed", "top-0", "end-0", "h-100", "shadow-lg", "overflow-auto");
    formContainer.style.width = "0"; // Inicialmente el formulario está colapsado
    formContainer.style.height = "100%";  // Ocupa toda la altura de la pantalla
    formContainer.style.transition = "width 0.3s ease-in-out";
    formContainer.style.zIndex = "1050"; // Asegúrate de que el formulario esté por encima de otros elementos
    document.body.appendChild(formContainer);

    // Contenido del formulario
    formContainer.innerHTML = `
        <div class="d-flex justify-content-between align-items-center border-bottom pb-2 mb-3">
            <h2 class="fs-5">Formulario de Afiliación</h2>
            <button class="btn-close" id="close-form"></button>
        </div>
        <form method="get" action="thankyou.html">
            <label for="first-name" class="form-label">Nombre:</label>
            <input type="text" id="first-name" name="first-name" class="form-control" required>

            <label for="last-name" class="form-label">Apellido:</label>
            <input type="text" id="last-name" name="last-name" class="form-control" required>

            <label for="position" class="form-label">Puesto en la organización:</label>
            <input type="text" id="position" name="position" class="form-control" pattern="[A-Za-z\-\s]{7,}">

            <label for="email" class="form-label">Correo Electrónico:</label>
            <input type="email" id="email" name="email" class="form-control" placeholder="ejemplo@correo.com" required>

            <label for="phone" class="form-label">Teléfono Móvil:</label>
            <input type="tel" id="phone" name="phone" class="form-control" required>

            <label for="organization" class="form-label">Nombre de la empresa:</label>
            <input type="text" id="organization" name="organization" class="form-control" required>

            <label for="membership" class="form-label">Nivel de Membresía:</label>
            <select id="membership" name="membership" class="form-select">
                <option value="NP">NP - Sin Costo</option>
                <option value="Bronze">Bronce</option>
                <option value="Silver">Plata</option>
                <option value="Gold">Oro</option>
            </select>

            <label for="description" class="form-label">Descripción de la empresa:</label>
            <textarea id="description" name="description" class="form-control"></textarea>

            <input type="hidden" id="timestamp" name="timestamp">
            
            <button type="submit" class="btn btn-primary mt-3">Enviar</button>
        </form>
    `;
    
    // Agregar evento para mostrar el formulario
    affiliateButton.addEventListener("click", function (e) {
        e.preventDefault();
        console.log("Formulario de afiliación mostrado.");
        formContainer.style.width = "100%";  // Asegúrate de que ocupe toda la pantalla
    });
    
    // Evento para cerrar el formulario
    document.getElementById("close-form").addEventListener("click", function () {
        console.log("Formulario de afiliación cerrado.");
        formContainer.style.width = "0";
    });
    
    // Capturar la fecha y hora actual en el campo hidden
    document.getElementById("timestamp").value = new Date().toISOString();
    console.log("Fecha y hora capturada: " + new Date().toISOString());

    // Agregar evento para mostrar el formulario
affiliateButton.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("Formulario de afiliación mostrado.");
    formContainer.classList.add('open');  // Abre el formulario con la clase 'open'
});

});
