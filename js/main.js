let currentProjectIndex = 0;

// Populate projects carousel
function populateProjects() {
    const carouselContainer = document.querySelector('.carousel-container');
    const currentLang = document.documentElement.lang || 'es';
    
    // Ordenar los proyectos específicamente: Nudge (id: 3) en el centro, Flora (id: 2) a la derecha y Suculenta (id: 1) a la izquierda
    const orderedProjects = [
        projectsData.find(p => p.id === 1), // Suculenta
        projectsData.find(p => p.id === 3), // Nudge
        projectsData.find(p => p.id === 2), // Flora
        projectsData.find(p => p.id === 4)  // Precious Water
    ].filter(Boolean); // Eliminar cualquier undefined si algún proyecto no se encuentra
    
    orderedProjects.forEach((project, index) => {
        const projectElement = document.createElement('div');
        projectElement.className = `carousel-item ${index === 1 ? 'active' : index === 2 ? 'next' : index === 0 ? 'prev' : ''}`;
        
        let imageContent = '';
        if (project.id === 9 && project.animatedSequence) {
            // Para el proyecto 9, crear un contenedor para la secuencia animada
            imageContent = `<div class="animated-sequence">
                <img src="${project.animatedSequence.images[0]}" alt="${currentLang === 'es' ? project.title : project.title_en}" loading="lazy">
            </div>`;
        } else {
            // Para otros proyectos, mostrar la imagen principal normalmente
            imageContent = `<img src="${project.mainImage}" alt="${currentLang === 'es' ? project.title : project.title_en}" loading="lazy">`;
        }
        
        projectElement.innerHTML = `
            <a href="project-template.html?id=${project.id}&type=project">
                ${imageContent}
                <div class="carousel-project-info">
                    <h3 data-es="${project.title}" data-en="${project.title_en}">${currentLang === 'es' ? project.title : project.title_en}</h3>
                    <p data-es="${project.shortDescription}" data-en="${project.shortDescription_en}">${currentLang === 'es' ? project.shortDescription : project.shortDescription_en}</p>
                </div>
            </a>
        `;
        carouselContainer.appendChild(projectElement);

        // Iniciar la animación si es el proyecto 9
        if (project.id === 9 && project.animatedSequence) {
            const img = projectElement.querySelector('.animated-sequence img');
            let currentIndex = 0;
            setInterval(() => {
                currentIndex = (currentIndex + 1) % project.animatedSequence.images.length;
                img.src = project.animatedSequence.images[currentIndex];
            }, project.animatedSequence.interval);
        }
    });

    // Add event listeners for navigation buttons
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');

    prevButton.addEventListener('click', navigateCarousel.bind(null, 'prev'));
    nextButton.addEventListener('click', navigateCarousel.bind(null, 'next'));
}

function navigateCarousel(direction) {
    const items = document.querySelectorAll('.carousel-item');
    
    // Remove all classes first
    items.forEach(item => {
        item.classList.remove('active', 'prev', 'next');
    });

    // Update current index
    if (direction === 'next') {
        currentProjectIndex = (currentProjectIndex + 1) % items.length;
    } else {
        currentProjectIndex = (currentProjectIndex - 1 + items.length) % items.length;
    }

    // Calculate prev and next indices
    const prevIndex = (currentProjectIndex - 1 + items.length) % items.length;
    const nextIndex = (currentProjectIndex + 1) % items.length;

    // Apply new classes
    items[prevIndex].classList.add('prev');
    items[currentProjectIndex].classList.add('active');
    items[nextIndex].classList.add('next');
}

// Populate experience grid
function populateExperience() {
    const experienceGrid = document.querySelector('.experience-grid');
    const currentLang = document.documentElement.lang || 'es';
    
    experienceData.forEach(exp => {
        const expElement = document.createElement('div');
        expElement.className = 'project-item'; // Reutilizamos los estilos de project-item
        expElement.innerHTML = `
            <a href="project-template.html?id=${exp.id}&type=experience">
                <img src="${exp.mainImage}" alt="${currentLang === 'es' ? exp.title : exp.title_en}" loading="lazy">
                <div class="project-info">
                    <h3 data-es="${exp.title}" data-en="${exp.title_en}">${currentLang === 'es' ? exp.title : exp.title_en}</h3>
                    <p data-es="${exp.shortDescription}" data-en="${exp.shortDescription_en}">${currentLang === 'es' ? exp.shortDescription : exp.shortDescription_en}</p>
                </div>
            </a>
        `;
        experienceGrid.appendChild(expElement);
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Handle contact form submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add your form submission logic here
        alert('Mensaje enviado correctamente');
        this.reset();
    });
}

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.background = 'rgba(255, 255, 255, 0.8)';
        return;
    }
    
    if (currentScroll > lastScroll) {
        // Scrolling down
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        navbar.style.transform = 'translateY(0)';
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
    
    lastScroll = currentScroll;
});

// Language switching functionality
let currentLanguage = 'es';

function updateLanguage(lang) {
    currentLanguage = lang;
    document.documentElement.lang = lang;
    
    // Update navigation links
    document.querySelector('a[href="#proyectos"]').textContent = translations[lang].projects;
    document.querySelector('a[href="#experiencia"]').textContent = translations[lang].experience;
    document.querySelector('a[href="#sobre-mi"]').textContent = translations[lang].aboutMe;
    document.querySelector('a[href="#contacto"]').textContent = translations[lang].contact;
    
    // Update hero section
    document.querySelector('.hero h1').textContent = translations[lang].productDesign;
    document.querySelector('.hero .subtitle').textContent = translations[lang].heroSubtitle;
    
    // Update sections titles
    document.querySelector('#proyectos h2').textContent = translations[lang].featuredProjects;
    document.querySelector('#experiencia h2').textContent = translations[lang].experienceTitle;
    document.querySelector('#sobre-mi h2').textContent = translations[lang].aboutTitle;
    document.querySelector('#contacto h2').textContent = translations[lang].contactTitle;
    
    // Update about section
    document.querySelector('.about-text p').textContent = translations[lang].aboutText;
    document.querySelector('.about-text .btn').textContent = translations[lang].viewCV;
    document.querySelector('.about-text .btn-secondary').textContent = translations[lang].learnMore;
    
    // Update footer
    document.querySelector('footer p').textContent = `© 2024 Kevin García. ${translations[lang].copyright}`;
    
    // Update language toggle button
    document.querySelector('.current-lang').textContent = translations[lang].currentLang;
    document.querySelector('#languageToggle').setAttribute('aria-label', 
        lang === 'es' ? translations.es.switchToEnglish : translations.en.switchToSpanish
    );
}

// Add event listener to language toggle button
document.getElementById('languageToggle').addEventListener('click', () => {
    const newLang = currentLanguage === 'es' ? 'en' : 'es';
    updateLanguage(newLang);
});

// Función para actualizar el idioma de las tarjetas
function updateCardsLanguage() {
    const currentLang = document.documentElement.lang || 'es';
    
    // Actualizar tarjetas de proyectos
    document.querySelectorAll('.carousel-project-info h3, .carousel-project-info p').forEach(element => {
        if (element.dataset.es && element.dataset.en) {
            element.textContent = currentLang === 'es' ? element.dataset.es : element.dataset.en;
        }
    });

    // Actualizar tarjetas de experiencia
    document.querySelectorAll('.project-info h3, .project-info p').forEach(element => {
        if (element.dataset.es && element.dataset.en) {
            element.textContent = currentLang === 'es' ? element.dataset.es : element.dataset.en;
        }
    });

    // Actualizar alt de imágenes
    document.querySelectorAll('img[alt]').forEach(img => {
        const parent = img.closest('a');
        if (parent) {
            const titleElement = parent.querySelector('h3');
            if (titleElement && titleElement.dataset.es && titleElement.dataset.en) {
                img.alt = currentLang === 'es' ? titleElement.dataset.es : titleElement.dataset.en;
            }
        }
    });
}

// Agregar la función updateCardsLanguage al evento de cambio de idioma
document.addEventListener('DOMContentLoaded', () => {
    const languageToggle = document.getElementById('languageToggle');
    if (languageToggle) {
        languageToggle.addEventListener('click', () => {
            setTimeout(updateCardsLanguage, 0);
        });
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    populateProjects();
    populateExperience();
}); 