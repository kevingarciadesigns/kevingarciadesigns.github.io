let currentProjectIndex = 0;

// Populate projects carousel
function populateProjects() {
    const carouselContainer = document.querySelector('.carousel-container');
    
    projectsData.forEach((project, index) => {
        const projectElement = document.createElement('div');
        projectElement.className = `carousel-item ${index === 0 ? 'active' : index === 1 ? 'next' : index === projectsData.length - 1 ? 'prev' : ''}`;
        projectElement.innerHTML = `
            <a href="project-template.html?id=${project.id}&type=project">
                <img src="${project.mainImage}" alt="${project.title}" loading="lazy">
                <div class="carousel-project-info">
                    <h3>${project.title}</h3>
                    <p>${project.shortDescription}</p>
                </div>
            </a>
        `;
        carouselContainer.appendChild(projectElement);
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
    
    experienceData.forEach(exp => {
        const expElement = document.createElement('div');
        expElement.className = 'project-item'; // Reutilizamos los estilos de project-item
        expElement.innerHTML = `
            <a href="project-template.html?id=${exp.id}&type=experience">
                <img src="${exp.mainImage}" alt="${exp.title}" loading="lazy">
                <div class="project-info">
                    <h3>${exp.title}</h3>
                    <p>${exp.shortDescription}</p>
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

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    populateProjects();
    populateExperience();
}); 