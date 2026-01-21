document.addEventListener('DOMContentLoaded', () => {

    setupHeroVideoIndex(); // Agrego imagen inicial mientras carga en la seccion Hero Index.
    setupTimelineAccordion(); // Inicializa el acordeón de turnos
    setupHeroVideo(); // Elige entre 2 videos segun sea mobile o desktop, de la seccion Embarazo.
    setupCarousel(); // Inicializa el carrusel de Atención Personalizada.
    setupBookingAnimations(); // Inicializa las animaciones de la sección de Reservas, de atención personalizada.

    // --- VARIABLES ---
    const hamburger = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const dropdownContent = document.querySelector('.dropdown-content');
    const formacionesToggle = document.getElementById('formaciones-toggle');
    const heroSobreMi = document.querySelector('.sobre-mi-hero');
    const ctaElement = document.querySelector('.animate-scroll-up');


    
    // 1. MENÚ HAMBURGUESA
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');

            // Cerrar submenú si cerramos el principal
            if (!navMenu.classList.contains('active')) {
                dropdownContent.classList.remove('show-dropdown');
            }
        });
    }

    // 2. CERRAR AL TOCAR ENLACE
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Verifica si es un link interno (empieza con #)
            if (link.getAttribute('href') && link.getAttribute('href').startsWith('#')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                dropdownContent.classList.remove('show-dropdown');
            }
        });
    });

    // 3. TOGGLE DEL DROPDOWN EN MÓVIL
    if (formacionesToggle && dropdownContent) {
        formacionesToggle.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                e.stopPropagation();
                dropdownContent.classList.toggle('show-dropdown');
            }
        });
    }

    // 4. SCROLL SUAVE (Smooth Scroll)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            
            // Excepciones
            if (targetId === '#' || targetId === '#formaciones') return;
            if (this.id === 'formaciones-toggle' && window.innerWidth > 768) return;

            e.preventDefault();
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerOffset = 85; 
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // 5. BOTÓN WHATSAPP - CAMBIO DE ESTILO AL LLEGAR AL FOOTER
    document.addEventListener('scroll', function() {
    const waBtn = document.getElementById('wa-btn');
    const anchor = document.getElementById('wa-anchor');
    const footer = document.getElementById('sitio-footer');

    if (!waBtn || !anchor) return;

    // Calculamos la distancia del ancla respecto a la parte superior de la ventana
    const anchorRect = anchor.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Si el ancla llega a la posición del botón (30px + altura del botón)
    if (anchorRect.top <= windowHeight - 90) {
        waBtn.classList.add('at-footer');
    } else {
        waBtn.classList.remove('at-footer');
    }
});
    // 6. BOTÓN VOLVER ARRIBA
    const scrollTopBtn = document.querySelector('.scroll-to-top');
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // 7. AÑO ACTUALIZADO AUTOMÁTICAMENTE EN EL FOOTER
    const footerText = document.querySelector('.footer-bottom p:first-child');
    if (footerText) {
        const currentYear = new Date().getFullYear();
        // Busca 4 dígitos y los reemplaza por el año actual
        footerText.innerHTML = footerText.innerHTML.replace(/\d{4}/, currentYear);
    }

    // 8. ANIMACIÓN DEL SUBTÍTULO "MIS ACOMPAÑAMIENTOS"
const subtituloAcompañamientos = document.querySelector('.subtituloAcompañamientos');
    
if (subtituloAcompañamientos) { 
    const options = {
        root: null,
        threshold: 0.8 // Un poco menos de margen para que active más rápido
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); 
            } else {
                // AGREGAMOS ESTO: Quita la clase al salir de pantalla
                entry.target.classList.remove('visible');
            }
        });
    }, options);

    observer.observe(subtituloAcompañamientos);
    }

// 9. TRIGGER PARA ANIMACIONES DEL HERO (SOBRE MI)
    if (heroSobreMi) {
    const heroObserverOptions = {
        root: null,
        threshold: 0.5 // Se activa cuando se ve un poquito de la sección
    };

    const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                // Quita la clase al salir para que se repita al volver
                entry.target.classList.remove('visible');
            }
        });
    }, heroObserverOptions);

    heroObserver.observe(heroSobreMi);

    // FORZADO INICIAL: Si la página carga y ya estamos viendo el hero, 
    // le ponemos la clase inmediatamente.
    if (heroSobreMi.getBoundingClientRect().top < window.innerHeight) {
        heroSobreMi.classList.add('visible');
    }
}


// 9.1 TRIGGER PARA ANIMACIONES DEL CTA (EMBARAZO)
if (ctaElement) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                // Si quieres que se repita la animación cada vez que suben/bajan:
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.3 }); // Se activa cuando el 30% del elemento es visible

    observer.observe(ctaElement);
}



// 10 LÓGICA DEL CARRUSEL 3D (ATENCIÓN PERSONALIZADA)
function setupCarousel() {
    // Elements
    const carousel = document.getElementById("memory-carousel");
    
    // Si no existe el carrusel en esta página, salimos para evitar errores
    if (!carousel) return; 

    const cards = document.querySelectorAll(".memory-card");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");

    // Variables internas del carrusel
    let currentIndex = 0;
    let startX, startY;
    let isDragging = false;
    let theta = 0;
    let radius = window.innerWidth <= 768 ? 250 : 400;
    const totalCards = cards.length;

    // --- FUNCIONES INTERNAS ---

    // Arrange cards in a circle
    function arrangeCards() {
        const angle = 360 / totalCards;
        cards.forEach((card, index) => {
            const cardAngle = angle * index;
            const rad = (cardAngle * Math.PI) / 180;
            const x = radius * Math.sin(rad);
            const z = radius * Math.cos(rad) * -1;
            
            card.style.transform = `rotateY(${cardAngle}deg) translateZ(${radius}px)`;
            card.dataset.index = index;
        });
    }

    // Rotate carousel
    function rotateCarousel() {
        carousel.style.transform = `rotateY(${theta}deg)`;
        currentIndex = Math.round(Math.abs(theta / (360 / totalCards)) % totalCards);
        if (currentIndex >= totalCards) currentIndex = 0;
    }

    // Next card
    function nextCard() {
        theta -= 360 / totalCards;
        rotateCarousel();
    }

    // Previous card
    function prevCard() {
        theta += 360 / totalCards;
        rotateCarousel();
    }

    // Flip card
    function flipCard(e) {
        const card = e.currentTarget;
        // Solo giramos si hacemos clic en la tarjeta que está al frente
        // (Opcional: puedes quitar esta validación si quieres que giren todas)
        card.classList.toggle("flipped");
    }

    // Drag functions
    function dragStart(e) {
        // Evitamos prevenir default en touch para no bloquear el scroll vertical de la página
        if (e.type === 'mousedown') e.preventDefault();
        
        isDragging = true;
        startX = e.pageX || e.touches[0].pageX;
    }

    function drag(e) {
        if (!isDragging) return;
        
        // Detectamos si es scroll vertical o horizontal
        const x = e.pageX || e.touches[0].pageX;
        // Si el movimiento es muy horizontal, prevenimos el scroll de la página
        // Si es vertical, dejamos que el usuario baje por la web
    }

    function dragEnd(e) {
        if (!isDragging) return;
        isDragging = false;

        const currentX = e.pageX || (e.changedTouches ? e.changedTouches[0].pageX : startX);
        const diffX = currentX - startX;

        if (Math.abs(diffX) > 20) {
            if (diffX > 0) {
                prevCard(); 
            } else {
                nextCard(); 
            }
        }
    }

    // Keyboard navigation
    function handleKeyDown(e) {
        // Solo si el carrusel está visible en pantalla (Opcional)
        if (e.key === "ArrowLeft") nextCard();
        if (e.key === "ArrowRight") prevCard();
    }

    // Resize handler
    window.addEventListener("resize", () => {
        radius = window.innerWidth <= 768 ? 250 : 400;
        arrangeCards();
        rotateCarousel();
    });

    // --- INICIALIZACIÓN ---
    arrangeCards();

    // Listeners
    if (prevBtn) prevBtn.addEventListener("click", prevCard);
    if (nextBtn) nextBtn.addEventListener("click", nextCard);
    
    cards.forEach((card) => {
        card.addEventListener("click", flipCard);
    });

    // Touch/mouse events
    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("touchstart", dragStart, { passive: true });
    
    // Usamos el contenedor o document para el movimiento
    document.addEventListener("mouseup", dragEnd);
    document.addEventListener("touchend", dragEnd);

    // Teclado
    document.addEventListener("keydown", handleKeyDown);
}

// 11. Función para animar las Step Boxes de Booking al hacer scroll
function setupBookingAnimations() {
    const boxes = document.querySelectorAll('.step-box');
    if (boxes.length === 0) return;

    const observerOptions = {
        root: null,
        threshold: 0.2 // Se activa cuando el 20% de la caja es visible
    };

    const bookingObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Dejamos de observar una vez que se anima para mejorar el rendimiento
                bookingObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    boxes.forEach(box => {
        bookingObserver.observe(box);
    });
}



}); //FIN DOM CONTENT LOADED

// 12. TRIGGER DE ANIMACIONES DINÁMICAS (Entrada y Salida)
const animatedElements = document.querySelectorAll('.animate-hidden');

if (animatedElements.length > 0) {
    const observerOptions = {
        root: null,
        // Usamos un margen para que la animación empiece un poquito antes 
        // de que el elemento esté totalmente en el centro
        threshold: 0.1 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Si el elemento entra en el campo de visión, se anima
                entry.target.classList.add('visible');
            } else {
                // SI SALE del campo de visión, le quitamos la clase 
                // para que pueda volver a animarse al regresar
                entry.target.classList.remove('visible');
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => {
        observer.observe(el);
    });
}


// 13. CAMBIO DE ESTILO DEL BOTÓN DE WHATSAPP AL LLEGAR AL FOOTER (USANDO INTERSECTION OBSERVER)
const waBtn = document.getElementById('wa-btn');
const footer = document.getElementById('sitio-footer');

const observerOptions = {
    root: null,
    threshold: 0.1 // Se activa cuando asoma el 10% del footer
};

const footerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            waBtn.classList.add('footer-active');
        } else {
            waBtn.classList.remove('footer-active');
        }
    });
}, observerOptions);

footerObserver.observe(footer);


// 14. Función para el acordeón de Turnos
function setupTimelineAccordion() {
    const toggles = document.querySelectorAll('.timeline-header');
    if (toggles.length === 0) return; // Si no hay acordeón en la página, no hace nada

    toggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const item = toggle.closest('.timeline-item');
            if (!item) return;

            // Lógica de Acordeón:
            if (item.classList.contains('active')) {
                // Si hacés clic en el que ya está abierto, se cierra
                item.classList.remove('active');
            } else {
                // Cerramos TODOS los que estén abiertos antes de abrir este
                document.querySelectorAll('.timeline-item').forEach(other => {
                    other.classList.remove('active');
                });
                // Abrimos el actual
                item.classList.add('active');
            }
        });
    });
}

// 15. Control del Video Hero Responsivo
function setupHeroVideo() {
    const video = document.getElementById('heroVideo');
    if (!video) return; 

    const desktopSrc = "img/Video-Embarazo-1080p.mp4"; 
    const mobileSrc = "img/Video-Embarazo-mobile.mp4"; 
    const desktopPoster = "img/Miniatura-Video-Embarazo-1080p.jpg";
    const mobilePoster = "img/Miniatura-Video-Embarazo-mobile.jpg";

    const isMobile = window.innerWidth < 768;
    const selectedSrc = isMobile ? mobileSrc : desktopSrc;
    const selectedPoster = isMobile ? mobilePoster : desktopPoster;
    
    // Solo si el SRC es diferente, actualizamos
    if (video.src.indexOf(selectedSrc) === -1) { 
        video.poster = selectedPoster;
        video.src = selectedSrc;
        video.load();
        
        // Esto ayuda a que el video empiece apenas pueda sin mostrar fondo
        video.play().catch(e => console.log("Esperando interacción..."));
    }
}

// 16. Control del Video Hero en Index (Imagen Inicial según dispositivo)
function setupHeroVideoIndex() {
    try {
        const video = document.getElementById('heroVideoIndex');
        if (!video) return; 

        const isMobile = window.innerWidth < 768;
        const mobilePoster = "img/Miniatura-Video-Frutas-Mobile.png"; 

        // Si es mobile, solo cambiamos el poster. 
        // El videoSrc ya viene por defecto en el HTML para asegurar que cargue.
        if (isMobile) {
            video.poster = mobilePoster;
            // Si en el futuro tienes un video vertical, lo cambiarías aquí
            // video.src = "img/VideoFrutas-mobile.mp4";
        }
        
        video.play().catch(() => {
            console.log("Autoplay esperando interacción");
        });

    } catch (error) {
        console.error("Error en setupHeroVideoIndex:", error);
    }
}
