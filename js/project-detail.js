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
    
    // Imagen principal
    const mainImage = document.createElement('img');
    mainImage.src = item.mainImage;
    mainImage.alt = item.title;
    imagesContainer.appendChild(mainImage);

    // Videos - Insertamos los videos justo después de la imagen principal
    if (item.videos && item.videos.length > 0) {
        console.log('Intentando cargar videos:', item.videos);
        const videoContainer = document.createElement('div');
        videoContainer.className = 'video-container';
        
        item.videos.forEach(videoSrc => {
            console.log('Cargando video:', videoSrc);
            const video = document.createElement('video');
            
            // Eventos para depuración
            video.addEventListener('loadeddata', () => {
                console.log('Video cargado exitosamente:', videoSrc);
            });
            
            video.addEventListener('error', (e) => {
                console.error('Error cargando video:', videoSrc, e.target.error);
            });

            // Configuración del video
            video.autoplay = true;
            video.loop = true;
            video.playsInline = true;
            video.muted = true; // Inicialmente muteado para asegurar el autoplay
            video.controls = false;
            video.volume = 0.3;
            video.preload = 'auto';
            video.style.width = '100%';
            video.style.height = 'auto';
            video.style.display = 'block';
            
            const source = document.createElement('source');
            source.src = videoSrc;
            source.type = 'video/mp4';
            video.appendChild(source);

            // Forzar la carga del video
            video.load();
            
            // Intentar reproducir el video después de cargar
            video.addEventListener('loadedmetadata', () => {
                video.play().catch(e => console.error('Error al reproducir:', e));
            });
            
            // Crear botón de mute
            const muteButton = document.createElement('button');
            muteButton.className = 'mute-button';
            muteButton.innerHTML = '<i class="fas fa-volume-mute"></i>';
            
            // Función para actualizar el icono
            const updateMuteIcon = () => {
                muteButton.innerHTML = video.muted ? 
                    '<i class="fas fa-volume-mute"></i>' : 
                    '<i class="fas fa-volume-up"></i>';
            };
            
            // Evento click para mute/unmute
            muteButton.addEventListener('click', () => {
                video.muted = !video.muted;
                if (!video.muted) {
                    video.volume = 0.3;
                }
                updateMuteIcon();
            });
            
            videoContainer.appendChild(video);
            videoContainer.appendChild(muteButton);
        });
        
        imagesContainer.appendChild(videoContainer);
    }

    // Imágenes adicionales después del video
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
            
            // Eventos para depuración
            video.addEventListener('loadeddata', () => {
                console.log('Video loaded successfully');
            });
            
            video.addEventListener('error', (e) => {
                console.error('Error loading video:', e);
            });

            // Configuración del video
            video.autoplay = true;
            video.loop = true;
            video.playsInline = true;
            video.controls = false;
            video.volume = 0.3;
            
            const source = document.createElement('source');
            source.src = encodeURI(videoSrc); // Codificar la URL para manejar espacios
            source.type = 'video/mp4';
            video.appendChild(source);
            
            // Crear botón de mute
            const muteButton = document.createElement('button');
            muteButton.className = 'mute-button';
            muteButton.innerHTML = '<i class="fas fa-volume-up"></i>';
            
            // Función para actualizar el icono
            const updateMuteIcon = () => {
                muteButton.innerHTML = video.muted ? 
                    '<i class="fas fa-volume-mute"></i>' : 
                    '<i class="fas fa-volume-up"></i>';
            };
            
            // Evento click para mute/unmute
            muteButton.addEventListener('click', () => {
                video.muted = !video.muted;
                updateMuteIcon();
            });

            // Forzar la carga del video
            video.load();
            
            videoContainer.appendChild(video);
            videoContainer.appendChild(muteButton);
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