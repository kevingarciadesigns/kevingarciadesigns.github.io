// Populate projects carousel
function populateProjects() {
    const carouselContainer = document.querySelector('.carousel-container');
    const currentLang = document.documentElement.lang || 'es';
    
    // Define the specific order of projects by their IDs
    // Nudge (3), Precious Water (4), Suculenta (1), Flora (2)
    const orderedProjects = [
        projectsData.find(p => p.id === 3), // Nudge
        projectsData.find(p => p.id === 4), // Precious Water
        projectsData.find(p => p.id === 1), // Suculenta
        projectsData.find(p => p.id === 2)  // Flora
    ].filter(Boolean); // Remove any undefined entries
    
    // Clear existing content
    carouselContainer.innerHTML = '';
    
    // Set initial state
    const initialState = {
        prev: orderedProjects.length - 1,  // Flora
        active: 0,                         // Nudge
        next: 1                            // Precious Water
    };
    
    orderedProjects.forEach((project, index) => {
        const projectElement = document.createElement('div');
        let position = '';
        if (index === initialState.active) position = 'active';
        else if (index === initialState.next) position = 'next';
        else if (index === initialState.prev) position = 'prev';
        
        projectElement.className = `carousel-item ${position}`;
        projectElement.dataset.projectIndex = index;
        projectElement.dataset.projectId = project.id;
        
        let imageContent = '';
        if (project.id === 9 && project.animatedSequence) {
            imageContent = `<div class="animated-sequence">
                <img src="${project.animatedSequence.images[0]}" alt="${currentLang === 'es' ? project.title : project.title_en}" loading="lazy">
            </div>`;
        } else {
            imageContent = `<img src="${project.mainImage}" alt="${currentLang === 'es' ? project.title : project.title_en}" loading="lazy">`;
        }
        
        // Only add link to project for the active (center) item
        const content = position === 'active' ? 
            `<a href="project-template.html?id=${project.id}&type=project">
                ${imageContent}
                <div class="carousel-project-info">
                    <h3 data-es="${project.title}" data-en="${project.title_en}">${currentLang === 'es' ? project.title : project.title_en}</h3>
                    <p data-es="${project.shortDescription}" data-en="${project.shortDescription_en}">${currentLang === 'es' ? project.shortDescription : project.shortDescription_en}</p>
                </div>
            </a>` :
            `<div class="carousel-clickable">
                ${imageContent}
                <div class="carousel-project-info">
                    <h3 data-es="${project.title}" data-en="${project.title_en}">${currentLang === 'es' ? project.title : project.title_en}</h3>
                    <p data-es="${project.shortDescription}" data-en="${project.shortDescription_en}">${currentLang === 'es' ? project.shortDescription : project.shortDescription_en}</p>
                </div>
            </div>`;
        
        projectElement.innerHTML = content;
        
        // Add click event for side images
        if (position !== 'active') {
            projectElement.addEventListener('click', () => {
                navigateCarousel(position === 'prev' ? 'prev' : 'next');
            });
        }
        
        carouselContainer.appendChild(projectElement);
    });
}

function navigateCarousel(direction) {
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    
    // Get current active item and its index
    const currentActiveItem = document.querySelector('.carousel-item.active');
    let currentIndex = parseInt(currentActiveItem.dataset.projectIndex);
    
    // Calculate new indices ensuring circular navigation
    let newIndex = direction === 'next' ? 
        (currentIndex + 1) % totalItems : 
        (currentIndex - 1 + totalItems) % totalItems;
    
    let prevIndex = (newIndex - 1 + totalItems) % totalItems;
    let nextIndex = (newIndex + 1) % totalItems;
    
    // First phase: Set up initial positions for the animation
    items.forEach((item, index) => {
        // Remove any existing click handlers
        item.onclick = null;
        
        // Remove link from active item
        const link = item.querySelector('a');
        if (link) {
            const div = document.createElement('div');
            div.className = 'carousel-clickable';
            div.innerHTML = link.innerHTML;
            link.replaceWith(div);
        }
        
        // Remove all classes except those needed for initial position
        item.classList.remove('active', 'prev', 'next', 'entering-active', 'entering-prev', 'entering-next');
        
        // Set up initial positions for entering elements
        if (index === prevIndex) {
            item.classList.add('entering-from-' + (direction === 'next' ? 'right' : 'left'));
        } else if (index === nextIndex) {
            item.classList.add('entering-from-' + (direction === 'next' ? 'right' : 'left'));
        } else if (index === newIndex) {
            item.classList.add('entering-from-' + (direction === 'next' ? 'right' : 'left'));
        }
        
        // Add movement classes for exiting elements
        if (index === currentIndex) {
            item.classList.add(direction === 'next' ? 'moving-left' : 'moving-right');
        }
    });
    
    // Second phase: Trigger the animations
    requestAnimationFrame(() => {
        items.forEach((item, index) => {
            if (index === prevIndex) {
                item.classList.add('entering-prev');
            } else if (index === nextIndex) {
                item.classList.add('entering-next');
            } else if (index === newIndex) {
                item.classList.add('entering-active');
            }
        });
    });
    
    // Third phase: Clean up and set final states
    setTimeout(() => {
        items.forEach(item => {
            // Remove all transition classes
            item.classList.remove(
                'moving-left', 'moving-right',
                'entering-from-left', 'entering-from-right',
                'entering-active', 'entering-prev', 'entering-next'
            );
            // Remove any existing event listeners
            item.replaceWith(item.cloneNode(true));
        });
        
        // Re-select items after replacing nodes
        const updatedItems = document.querySelectorAll('.carousel-item');
        
        // Apply final classes
        updatedItems[prevIndex].classList.add('prev');
        updatedItems[nextIndex].classList.add('next');
        updatedItems[newIndex].classList.add('active');
        
        // Add click handlers for side items
        const prevItem = updatedItems[prevIndex];
        const nextItem = updatedItems[nextIndex];
        
        // Add click event listeners
        prevItem.addEventListener('click', () => {
            navigateCarousel('prev');
        });
        
        nextItem.addEventListener('click', () => {
            navigateCarousel('next');
        });
        
        // Update active item with link
        const activeItem = updatedItems[newIndex];
        const clickable = activeItem.querySelector('.carousel-clickable');
        if (clickable) {
            const link = document.createElement('a');
            const projectId = parseInt(activeItem.dataset.projectId);
            link.href = `project-template.html?id=${projectId}&type=project`;
            link.innerHTML = clickable.innerHTML;
            clickable.replaceWith(link);
        }
    }, 600); // Full duration of the CSS transition
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
let currentLanguage = localStorage.getItem('selectedLanguage') || 'en';

function updateDataAttributes(lang) {
    document.querySelectorAll('[data-es][data-en]').forEach(element => {
        element.textContent = lang === 'es' ? element.dataset.es : element.dataset.en;
    });
}

function updateSpecificElements(lang) {
    // Update hero section if exists
    const heroTitle = document.querySelector('.hero h1');
    const heroSubtitle = document.querySelector('.hero .subtitle');
    if (heroTitle) heroTitle.textContent = translations[lang].productDesign;
    if (heroSubtitle) heroSubtitle.textContent = translations[lang].heroSubtitle;
    
    // Update sections titles if they exist
    const projectsTitle = document.querySelector('#proyectos h2');
    const experienceTitle = document.querySelector('#experiencia h2');
    const aboutTitle = document.querySelector('#sobre-mi h2');
    const contactTitle = document.querySelector('#contacto h2');
    
    if (projectsTitle) projectsTitle.textContent = translations[lang].featuredProjects;
    if (experienceTitle) experienceTitle.textContent = translations[lang].experienceTitle;
    if (aboutTitle) aboutTitle.textContent = translations[lang].aboutTitle;
    if (contactTitle) contactTitle.textContent = translations[lang].contactTitle;
    
    // Update about section if exists
    const aboutText = document.querySelector('.about-text p');
    const cvButton = document.querySelector('.about-text .btn');
    const learnMoreButton = document.querySelector('.about-text .btn-secondary');
    
    if (aboutText) aboutText.textContent = translations[lang].aboutText;
    if (cvButton) cvButton.textContent = translations[lang].viewCV;
    if (learnMoreButton) learnMoreButton.textContent = translations[lang].learnMore;
}

function updateLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('selectedLanguage', lang);
    document.documentElement.lang = lang;
    
    // Update all elements with data attributes
    updateDataAttributes(lang);
    
    // Update specific elements in index.html
    updateSpecificElements(lang);
    
    // Update language toggle button
    document.querySelector('.current-lang').textContent = translations[lang].currentLang;
    document.querySelector('#languageToggle').setAttribute('aria-label', 
        lang === 'es' ? translations.es.switchToEnglish : translations.en.switchToSpanish
    );
    
    // Update cards if they exist
    updateCardsLanguage();
}

// Add event listener to language toggle button
document.getElementById('languageToggle').addEventListener('click', () => {
    const newLang = currentLanguage === 'es' ? 'en' : 'es';
    updateLanguage(newLang);
});

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.querySelector('.carousel-container');
    const experienceGrid = document.querySelector('.experience-grid');
    
    if (carouselContainer) populateProjects();
    if (experienceGrid) populateExperience();
    updateLanguage(currentLanguage); // Use stored or default language
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