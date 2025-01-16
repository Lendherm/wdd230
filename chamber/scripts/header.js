document.addEventListener('DOMContentLoaded', function() {
    // Crear el contenedor del header
    const header = document.createElement('header');
    header.classList.add('site-header');
    const headerContainer = document.createElement('div');
    headerContainer.classList.add('header_container');

    // Ícono del menú hamburguesa
    const menuToggle = document.createElement('div');
    menuToggle.classList.add('header-menu-icon');
    menuToggle.id = 'menu-toggle';
    const menuIconSymbol = document.createElement('span');
    menuIconSymbol.classList.add('header-menu-icon-symbol');
    menuIconSymbol.innerHTML = '&#9776;';
    const menuIconText = document.createElement('span');
    menuIconText.classList.add('header-menu-icon-text');
    menuIconText.textContent = 'Menú';
    menuToggle.appendChild(menuIconSymbol);
    menuToggle.appendChild(menuIconText);

    // Aniversario
    const anniversary = document.createElement('div');
    anniversary.classList.add('header-anniversary');
    const anniversaryTitle = document.createElement('div');
    anniversaryTitle.classList.add('header-anniversary-title');
    anniversaryTitle.textContent = 'Cumplimos';
    const anniversaryYear = document.createElement('div');
    anniversaryYear.classList.add('header-anniversary-year');
    anniversaryYear.textContent = '150 años';
    const anniversaryText = document.createElement('div');
    anniversaryText.classList.add('header-anniversary-text');
    anniversaryText.textContent = 'de unir, servir y representar';
    anniversary.appendChild(anniversaryTitle);
    anniversary.appendChild(anniversaryYear);
    anniversary.appendChild(anniversaryText);

    // Logo
    const logo = document.createElement('div');
    logo.classList.add('header-logo');
    const logoImg = document.createElement('img');
    logoImg.src = 'ruta/a/tu/logo.png';
    logoImg.alt = 'Logo Cámara de Comercio';
    logo.appendChild(logoImg);

    // Botón "Afiliarme"
    const affiliateButton = document.createElement('a');
    affiliateButton.href = '#';
    affiliateButton.classList.add('header-affiliate-button');
    affiliateButton.textContent = 'QUIERO AFILIARME';

    // Agregar elementos al contenedor del header
    headerContainer.appendChild(menuToggle);
    headerContainer.appendChild(anniversary);
    headerContainer.appendChild(logo);
    headerContainer.appendChild(affiliateButton);

    // Agregar el contenedor del header al header
    header.appendChild(headerContainer);

    // Insertar el header en el DOM
    document.body.insertBefore(header, document.body.firstChild);

    // Crear el menú lateral
    const overlay = document.createElement('div');
    overlay.classList.add('header-overlay');
    overlay.id = 'overlay';

    const sideMenu = document.createElement('div');
    sideMenu.classList.add('header-side-menu');
    sideMenu.id = 'side-menu';
    const nav = document.createElement('nav');
    const navTitle = document.createElement('h2');
    navTitle.textContent = 'Menú Principal';

    const ul = document.createElement('ul');
    const menuItems = [
        { text: 'Inicio', link: '/week01/chamber-site.html' },
        { text: 'Servicios', link: '#' },
        { text: 'Representatividad', link: '#' },
        { text: 'Eventos', link: '#' },
        { text: '¿Quiénes Somos?', link: '#' },
        { text: 'Directorio de Consejo', link: '#' },
        { text: 'Prensa', link: '#' },
        { text: 'Blog', link: '#' },
        { text: 'Contacto', link: '#' }
    ];

    menuItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = item.link;
        a.innerHTML = `<i class="fas fa-arrow-right"></i> ${item.text}`;
        li.appendChild(a);
        ul.appendChild(li);
    });

    const contactInfo = document.createElement('div');
    contactInfo.classList.add('header-contact-info');
    const contactDetails = [
        { icon: 'fas fa-map-marker-alt', text: 'Paseo de la Reforma 42 Colonia Centro, Alcaldía Cuauhtémoc, C.P. 06040, Ciudad de México.' },
        { icon: 'fas fa-envelope', text: 'primercontacto@ccmexico.com.mx' },
        { icon: 'fab fa-whatsapp', text: '+52 55 7196 6356' },
        { icon: 'fas fa-phone-alt', text: '55 36-85-22-69' }
    ];

    contactDetails.forEach(detail => {
        const p = document.createElement('p');
        const icon = document.createElement('i');
        icon.classList.add(detail.icon);
        p.appendChild(icon);
        p.appendChild(document.createTextNode(` ${detail.text}`));
        contactInfo.appendChild(p);
    });

    const socialIcons = document.createElement('ul');
    socialIcons.classList.add('header-social-icons');
    const socialLinks = [
        { class: 'fab fa-facebook' },
        { class: 'fab fa-instagram' },
        { class: 'fab fa-twitter' },
        { class: 'fab fa-youtube' },
        { class: 'fab fa-linkedin' }
    ];

    socialLinks.forEach(social => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#';
        a.classList.add(social.class);
        li.appendChild(a);
        socialIcons.appendChild(li);
    });

    // Agregar todo al menú lateral
    nav.appendChild(navTitle);
    nav.appendChild(ul);
    sideMenu.appendChild(nav);
    sideMenu.appendChild(contactInfo);
    sideMenu.appendChild(socialIcons);

    // Insertar el menú lateral al body
    document.body.appendChild(overlay);
    document.body.appendChild(sideMenu);

    // Funcionalidad del menú hamburguesa (toggle)
    menuToggle.addEventListener('click', function() {
        sideMenu.classList.toggle('open'); // Abre o cierra el menú
        overlay.classList.toggle('active'); // Muestra u oculta el overlay
    });

    // Cerrar el menú al hacer clic en el overlay
    overlay.addEventListener('click', function() {
        sideMenu.classList.remove('open');
        overlay.classList.remove('active');
    });

    // Cerrar el menú al hacer clic en un enlace dentro del menú
    document.querySelectorAll('.header-side-menu a').forEach(link => {
        link.addEventListener('click', () => {
            sideMenu.classList.remove('open');
            overlay.classList.remove('active');
        });
    });
});
