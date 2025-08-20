document.addEventListener('DOMContentLoaded', function() {
    // ==================== Menú Móvil (Existente) ====================
    const mobileMenu = document.getElementById('mobile-menu');
    const mainMenu = document.querySelector('.main-menu');

    mobileMenu.addEventListener('click', function() {
        mobileMenu.classList.toggle('is-active');
        mainMenu.classList.toggle('is-active');
    });

    // Cierra el menú móvil al hacer clic en un enlace (Existente)
    document.querySelectorAll('.main-menu ul li a').forEach(item => {
        item.addEventListener('click', function() {
            mobileMenu.classList.remove('is-active');
            mainMenu.classList.remove('is-active');
        });
    });

    // ==================== Header Sticky (Existente) ====================
    const header = document.querySelector('.main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });

    // ==================== Filtros de Creaciones (Existente) ====================
    const filterButtons = document.querySelectorAll('.filter-btn');
    const creationItems = document.querySelectorAll('.creation-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remueve la clase 'active' de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Añade la clase 'active' al botón clicado
            this.classList.add('active');

            const filter = this.dataset.filter; // Obtiene el valor del data-filter del botón

            creationItems.forEach(item => {
                const category = item.dataset.category; // Obtiene el valor del data-category del item
                
                if (filter === 'all' || category === filter) {
                    item.style.display = 'block'; // Muestra el item
                } else {
                    item.style.display = 'none'; // Oculta el item
                }
            });
        });
    });

    // ==================== Tabs del Formulario de Contacto (Existente) ====================
    const tabButtons = document.querySelectorAll('.tab-button');
    const consultaForm = document.getElementById('consulta-form');
    const reservaForm = document.getElementById('reserva-form');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remueve la clase 'active' de todos los botones de tab
            tabButtons.forEach(btn => btn.classList.remove('active'));
            // Añade la clase 'active' al botón clicado
            this.classList.add('active');

            const targetTab = this.dataset.tab; // 'consulta' o 'reserva'

            if (targetTab === 'consulta') {
                consultaForm.style.display = 'grid';
                reservaForm.style.display = 'none';
            } else {
                consultaForm.style.display = 'none';
                reservaForm.style.display = 'grid';
            }
        });
    });

    // ==================== Funcionalidad LIGHTBOX (NUEVO) ====================
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.querySelector('.lightbox-close');

    // Abre la lightbox al hacer clic en cualquier imagen de creación
    document.querySelectorAll('.creation-item img').forEach(image => {
        image.addEventListener('click', function() {
            lightbox.classList.add('active'); // Muestra el lightbox
            lightboxImg.src = this.dataset.fullsizeSrc || this.src; // Carga la imagen grande
            lightboxCaption.textContent = this.alt; // Muestra el texto alternativo como título
            // Opcional: Deshabilita el scroll del cuerpo cuando el lightbox está activo
            document.body.style.overflow = 'hidden';
        });
    });

    // Cierra la lightbox al hacer clic en el botón de cerrar
    lightboxClose.addEventListener('click', function() {
        lightbox.classList.remove('active');
        document.body.style.overflow = ''; // Habilita el scroll del cuerpo
    });

    // Cierra la lightbox al hacer clic fuera de la imagen (en el fondo)
    lightbox.addEventListener('click', function(e) {
        // Si el clic no fue en la imagen ni en el caption
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
            document.body.style.overflow = ''; // Habilita el scroll del cuerpo
        }
    });

    // Cierra la lightbox con la tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === "Escape" && lightbox.classList.contains('active')) {
            lightbox.classList.remove('active');
            document.body.style.overflow = ''; // Habilita el scroll del cuerpo
        }
    });
    // ==================== FIN LIGHTBOX ====================
}); // Cierre de document.addEventListener('DOMContentLoaded')