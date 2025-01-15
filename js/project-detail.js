document.addEventListener('DOMContentLoaded', () => {
    // Get parameters from URL
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    const type = urlParams.get('type');

    if (!id || !type) {
        window.location.href = 'index.html';
        return;
    }

    // Get the item based on type
    const item = type === 'project' ? getProjectById(id) : getExperienceById(id);
    
    if (!item) {
        window.location.href = 'index.html';
        return;
    }

    // Update page title
    document.title = `${item.title} - Kevin García`;

    // Populate item information
    document.getElementById('project-title').textContent = item.title;
    document.getElementById('project-description').textContent = item.shortDescription;
    document.getElementById('project-full-description').innerHTML = item.fullDescription;

    // Populate details
    const detailsList = document.getElementById('project-details');
    const details = [
        `Año: ${item.year}`,
        'Herramientas: ' + item.tools.join(', '),
        ...item.details
    ];

    details.forEach(detail => {
        const li = document.createElement('li');
        li.textContent = detail;
        detailsList.appendChild(li);
    });

    // Populate images
    const imagesContainer = document.querySelector('.project-images');
    const mainImage = document.createElement('img');
    mainImage.src = item.mainImage;
    mainImage.alt = item.title;
    imagesContainer.appendChild(mainImage);

    if (item.additionalImages && item.additionalImages.length > 0) {
        item.additionalImages.forEach(imageSrc => {
            const img = document.createElement('img');
            img.src = imageSrc;
            img.alt = `${item.title} - Imagen adicional`;
            img.loading = 'lazy';
            imagesContainer.appendChild(img);
        });
    }

    // Secuencia animada de imágenes
    if (item.animatedSequence && item.animatedSequence.images.length > 0) {
        const animContainer = document.createElement('div');
        animContainer.className = 'animated-sequence';
        const img = document.createElement('img');
        img.alt = `${item.title} - Secuencia animada`;
        img.loading = 'lazy';
        
        // Cargar la primera imagen
        img.src = item.animatedSequence.images[0];
        animContainer.appendChild(img);
        imagesContainer.appendChild(animContainer);

        let currentIndex = 0;
        // Iniciar la animación
        setInterval(() => {
            currentIndex = (currentIndex + 1) % item.animatedSequence.images.length;
            img.src = item.animatedSequence.images[currentIndex];
        }, item.animatedSequence.interval);
    }

    // Videos
    if (item.videos && item.videos.length > 0) {
        const videoContainer = document.createElement('div');
        videoContainer.className = 'video-container';
        
        item.videos.forEach(videoSrc => {
            const video = document.createElement('video');
            video.autoplay = true;
            video.loop = true;
            video.muted = true; // Necesario para autoplay
            video.playsInline = true; // Mejor soporte en móviles
            const source = document.createElement('source');
            source.src = videoSrc;
            source.type = 'video/mp4';
            video.appendChild(source);
            
            const fallbackText = document.createTextNode('Tu navegador no soporta el elemento video.');
            video.appendChild(fallbackText);
            
            videoContainer.appendChild(video);
        });
        
        imagesContainer.appendChild(videoContainer);
    }

    // Setup navigation
    const prevItem = type === 'project' ? getPreviousProject(id) : getPreviousExperience(id);
    const nextItem = type === 'project' ? getNextProject(id) : getNextExperience(id);

    const navPrevious = document.querySelector('.nav-previous');
    const navNext = document.querySelector('.nav-next');

    if (prevItem) {
        navPrevious.innerHTML = `
            <a href="project-template.html?id=${prevItem.id}&type=${type}">
                ${prevItem.title}
            </a>
        `;
    }

    if (nextItem) {
        navNext.innerHTML = `
            <a href="project-template.html?id=${nextItem.id}&type=${type}">
                ${nextItem.title}
            </a>
        `;
    }
}); 

// Función para cargar los detalles del proyecto
function loadProjectDetails(projectId) {
    const project = getProjectById(projectId);
    if (!project) return;

    // Actualizar título y descripción
    document.getElementById('project-title').textContent = project.title;
    document.getElementById('project-description').textContent = project.shortDescription;
    
    // Cargar imágenes
    const projectImagesContainer = document.querySelector('.project-images');
    projectImagesContainer.innerHTML = ''; // Limpiar contenedor

    // Imagen principal
    const mainImage = document.createElement('img');
    mainImage.src = project.mainImage;
    mainImage.alt = project.title;
    projectImagesContainer.appendChild(mainImage);

    // Imágenes adicionales
    if (project.additionalImages && project.additionalImages.length > 0) {
        project.additionalImages.forEach(imageSrc => {
            const img = document.createElement('img');
            img.src = imageSrc;
            img.alt = project.title;
            projectImagesContainer.appendChild(img);
        });
    }

    // Secuencia animada de imágenes
    if (project.animatedSequence && project.animatedSequence.images.length > 0) {
        const animContainer = document.createElement('div');
        animContainer.className = 'animated-sequence';
        const img = document.createElement('img');
        img.alt = `${project.title} - Secuencia animada`;
        img.loading = 'lazy';
        
        // Cargar la primera imagen
        img.src = project.animatedSequence.images[0];
        animContainer.appendChild(img);
        projectImagesContainer.appendChild(animContainer);

        let currentIndex = 0;
        // Iniciar la animación
        setInterval(() => {
            currentIndex = (currentIndex + 1) % project.animatedSequence.images.length;
            img.src = project.animatedSequence.images[currentIndex];
        }, project.animatedSequence.interval);
    }

    // Videos
    if (project.videos && project.videos.length > 0) {
        const videoContainer = document.createElement('div');
        videoContainer.className = 'video-container';
        
        project.videos.forEach(videoSrc => {
            const video = document.createElement('video');
            video.autoplay = true;
            video.loop = true;
            video.muted = true; // Necesario para autoplay
            video.playsInline = true; // Mejor soporte en móviles
            const source = document.createElement('source');
            source.src = videoSrc;
            source.type = 'video/mp4';
            video.appendChild(source);
            
            const fallbackText = document.createTextNode('Tu navegador no soporta el elemento video.');
            video.appendChild(fallbackText);
            
            videoContainer.appendChild(video);
        });
        
        projectImagesContainer.appendChild(videoContainer);
    }

    // Actualizar descripción completa
    document.getElementById('project-full-description').innerHTML = project.fullDescription;

    // Actualizar detalles técnicos
    const detailsList = document.getElementById('project-details');
    detailsList.innerHTML = ''; // Limpiar lista
    project.details.forEach(detail => {
        const li = document.createElement('li');
        li.textContent = detail;
        detailsList.appendChild(li);
    });

    // Actualizar navegación
    updateNavigation(projectId);
} 