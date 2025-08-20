// JavaScript para el menú móvil 
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('mobile-menu');
    const mainMenuUl = document.querySelector('.main-menu ul');

    if (mobileMenuToggle && mainMenuUl) {
        mobileMenuToggle.addEventListener('click', function() {
            mainMenuUl.classList.toggle('active');
            this.classList.toggle('active'); // Opcional: para animar el ícono del menú
        });
    }

    // JavaScript para las pestañas del formulario de contacto s
    document.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('click', function() {
            document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const targetTab = this.dataset.tab;
            document.querySelectorAll('.contact-form').forEach(form => {
                form.style.display = 'none';
            });
            const formElement = document.getElementById(targetTab + '-form');
            if (formElement) {
                formElement.style.display = 'grid'; // Usamos grid para el layout del formulario
            }
        });
    });

    // JavaScript para los filtros de creaciones (tu código existente)
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const filter = this.dataset.filter;
            document.querySelectorAll('.creation-item').forEach(item => {
                if (filter === 'all' || item.dataset.category === filter) {
                    item.style.display = 'block'; // O 'grid-item', dependiendo de cómo lo diseñes
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // --- NUEVO CÓDIGO PARA EL ENCABEZADO QUE SE CONTRAE ---
    const header = document.querySelector('.main-header');
    const scrollThreshold = 80; /* Cantidad de píxeles para empezar a reducir el header */

    if (header) { // Asegúrarse de que el header existe antes de añadir el listener
        window.addEventListener('scroll', () => {
            if (window.scrollY > scrollThreshold) {
                header.classList.add('header-scrolled');
            } else {
                header.classList.remove('header-scrolled');
            }
        });
    }
});