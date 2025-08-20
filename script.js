document.addEventListener('DOMContentLoaded', function() {
    // 1. Funcionalidad para la contracción del encabezado (Header Shrink)
    const header = document.querySelector('.main-header');
    const scrollThreshold = 80; // Cantidad de scroll para activar el efecto

    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > scrollThreshold) {
                header.classList.add('header-scrolled');
            } else {
                header.classList.remove('header-scrolled');
            }
        });
    }

    // 2. Funcionalidad para el menú móvil (Barra Lateral)
    const mobileMenuToggle = document.getElementById('mobile-menu'); // El botón de hamburguesa
    const mainMenuUl = document.querySelector('.main-menu ul');     // La lista de enlaces del menú

    if (mobileMenuToggle && mainMenuUl) {
        // Al hacer clic en el botón de hamburguesa
        mobileMenuToggle.addEventListener('click', function() {
            mainMenuUl.classList.toggle('active');     // Alterna la clase 'active' en la lista del menú
            this.classList.toggle('active');           // Alterna la clase 'active' en el propio botón (para animarlo)
        });

        // Opcional: Cerrar el menú si se hace clic fuera de él o del botón de hamburguesa
        document.addEventListener('click', function(event) {
            // Si el clic no fue dentro del menú ni en el botón de hamburguesa, y el menú está abierto
            if (!mainMenuUl.contains(event.target) && !mobileMenuToggle.contains(event.target) && mainMenuUl.classList.contains('active')) {
                mainMenuUl.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        });

        // Cerrar el menú al hacer clic en uno de los enlaces del menú
        mainMenuUl.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                mainMenuUl.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            });
        });
    }

    // 3. Funcionalidad para las pestañas del formulario de contacto
    document.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('click', function() {
            // Desactiva todas las pestañas
            document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
            // Activa la pestaña clickeada
            this.classList.add('active');

            const targetTab = this.dataset.tab; // Obtiene el valor del atributo data-tab
            
            // Oculta todos los formularios de contacto
            document.querySelectorAll('.contact-form').forEach(form => {
                form.style.display = 'none';
            });

            // Muestra el formulario correspondiente a la pestaña clickeada
            const formElement = document.getElementById(targetTab + '-form');
            if (formElement) {
                formElement.style.display = 'grid'; // Asegúrate de que este display sea el que usas para mostrar tu formulario (flex, block, grid)
            }
        });
    });

    // Asegura que al cargar la página se muestre la primera pestaña del formulario
    const initialTabButton = document.querySelector('.tab-button[data-tab="consulta"]');
    if (initialTabButton) {
        initialTabButton.click(); // Simula un clic en el botón de consulta al cargar
    }


    // 4. Funcionalidad para los filtros de "Mis Creaciones"
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', function() {
            // Desactiva todos los botones de filtro
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            // Activa el botón clickeado
            this.classList.add('active');

            const filter = this.dataset.filter; // Obtiene el valor del atributo data-filter

            // Itera sobre cada elemento de creación
            document.querySelectorAll('.creation-item').forEach(item => {
                if (filter === 'all' || item.dataset.category === filter) {
                    item.style.display = 'block'; // Muestra el elemento si coincide con el filtro o es 'all'
                } else {
                    item.style.display = 'none';  // Oculta el elemento si no coincide
                }
            });
        });
    });

    // Opcional: Activa el botón de filtro 'all' al cargar la página
    const initialFilterButton = document.querySelector('.filter-btn[data-filter="all"]');
    if (initialFilterButton) {
        initialFilterButton.click(); // Simula un clic en el botón 'all' al cargar
    }
});