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

    // Get current language
    const currentLang = document.documentElement.lang || 'es';

    // Update page title
    document.title = `${currentLang === 'es' ? item.title : item.title_en} - Kevin García`;

    // Populate item information
    document.getElementById('project-title').textContent = currentLang === 'es' ? item.title : item.title_en;
    document.getElementById('project-description').textContent = currentLang === 'es' ? item.shortDescription : item.shortDescription_en;
    
    // Añadir el botón "Saber más" solo para el proyecto Nudge
    const fullDescriptionContainer = document.getElementById('project-full-description');
    fullDescriptionContainer.innerHTML = currentLang === 'es' ? item.fullDescription : item.fullDescription_en;
    
    if (item.title === "Nudge") {
        const learnMoreButton = document.createElement('a');
        learnMoreButton.href = 'nudge-details.html';
        learnMoreButton.className = 'learn-more-button';
        learnMoreButton.textContent = currentLang === 'es' ? 'Saber más' : 'Learn more';
        fullDescriptionContainer.appendChild(learnMoreButton);
    }

    // Populate details
    const detailsList = document.getElementById('project-details');
    const details = [
        `${currentLang === 'es' ? 'Año' : 'Year'}: ${item.year}`,
        `${currentLang === 'es' ? 'Herramientas' : 'Tools'}: ${(currentLang === 'es' ? item.tools : item.tools_en).join(', ')}`,
        ...(currentLang === 'es' ? item.details : item.details_en)
    ];

    details.forEach(detail => {
        const li = document.createElement('li');
        li.textContent = detail;
        detailsList.appendChild(li);
    });

    // Populate images
    const imagesContainer = document.querySelector('.project-images');
    
    // Imagen principal - Solo ocultar para experiencia ID 2 y cuando es experiencia ID 9
    if (!(type === 'experience' && (id === '2' || id === '9'))) {
        const mainImage = document.createElement('img');
        mainImage.src = item.mainImage;
        mainImage.alt = currentLang === 'es' ? item.title : item.title_en;
        imagesContainer.appendChild(mainImage);
    }

    // Si es la experiencia 9, añadir la secuencia animada al principio
    let hasAnimatedSequence = false;
    if (type === 'experience' && id === '9' && item.animatedSequence) {
        hasAnimatedSequence = true;
        const animContainer = document.createElement('div');
        animContainer.className = 'animated-sequence';
        const img = document.createElement('img');
        img.alt = `${currentLang === 'es' ? item.title : item.title_en} - ${currentLang === 'es' ? 'Secuencia animada' : 'Animated sequence'}`;
        img.loading = 'lazy';
        
        // Cargar la primera imagen
        img.src = item.animatedSequence.images[0];
        animContainer.appendChild(img);
        imagesContainer.appendChild(animContainer);

        // Iniciar la animación
        let currentIndex = 0;
        setInterval(() => {
            currentIndex = (currentIndex + 1) % item.animatedSequence.images.length;
            img.src = item.animatedSequence.images[currentIndex];
        }, item.animatedSequence.interval);
    }

    // Videos - Insertamos los videos justo después de la imagen principal
    if (item.videos && item.videos.length > 0) {
        const videoContainer = document.createElement('div');
        videoContainer.className = 'video-container';
        
        // Comportamiento diferente para el proyecto Flora
        if (item.title === "Flora") {
            videoContainer.style.display = 'grid';
            videoContainer.style.gridTemplateColumns = 'repeat(auto-fit, minmax(300px, 1fr))';
            videoContainer.style.gap = '20px';
            videoContainer.style.marginTop = '40px';
            
            item.videos.forEach(videoSrc => {
                const video = document.createElement('video');
                video.autoplay = true;
                video.loop = true;
                video.playsInline = true;
                video.muted = true;
                video.controls = false;
                video.style.width = '100%';
                video.style.height = 'auto';
                video.style.display = 'block';
                video.style.borderRadius = '12px';
                
                const source = document.createElement('source');
                source.src = videoSrc;
                source.type = 'video/mp4';
                video.appendChild(source);
                video.load();
                
                video.addEventListener('loadedmetadata', () => {
                    video.play().catch(e => console.error('Error al reproducir:', e));
                });
                
                videoContainer.appendChild(video);
            });
            
            // Añadir los videos al final del contenedor de imágenes
            imagesContainer.appendChild(videoContainer);
        } else {
            // Comportamiento original para Nudge y otros proyectos
            item.videos.forEach(videoSrc => {
                const video = document.createElement('video');
                
                video.addEventListener('loadeddata', () => {
                    console.log('Video cargado exitosamente:', videoSrc);
                });
                
                video.addEventListener('error', (e) => {
                    console.error('Error cargando video:', videoSrc, e.target.error);
                });

                video.autoplay = true;
                video.loop = true;
                video.playsInline = true;
                video.muted = true;
                video.controls = false;
                video.volume = 0.1;
                video.preload = 'auto';
                video.style.width = '100%';
                video.style.height = 'auto';
                video.style.display = 'block';
                
                // Ajustes especiales solo para experiencia ID 7
                if (type === 'experience' && id === '7') {
                    video.style.width = '50%';
                    video.style.margin = '0 auto'; // Centrar el video
                    video.style.boxShadow = 'none'; // Quitar el shadow
                }
                
                const source = document.createElement('source');
                source.src = videoSrc;
                source.type = 'video/mp4';
                video.appendChild(source);
                video.load();
                
                // Asegurar que el volumen se mantiene al 10% incluso después de unmute
                video.addEventListener('volumechange', () => {
                    if (!video.muted && video.volume !== 0.1) {
                        video.volume = 0.1;
                    }
                });
                
                video.addEventListener('loadedmetadata', () => {
                    video.play().catch(e => console.error('Error al reproducir:', e));
                });
                
                // Crear botón de mute solo para Nudge y otros proyectos
                const muteButton = document.createElement('button');
                muteButton.className = 'mute-button';
                const muteImage = document.createElement('img');
                muteImage.src = 'images/P6/music.png';
                muteImage.alt = currentLang === 'es' ? 'Alternar sonido' : 'Toggle sound';
                muteImage.style.width = '20px';
                muteImage.style.height = '20px';
                muteImage.style.filter = 'brightness(0) invert(1)';
                muteImage.className = 'pulsing';
                muteButton.appendChild(muteImage);
                
                muteButton.addEventListener('click', () => {
                    video.muted = !video.muted;
                    if (!video.muted) {
                        video.volume = 0.1;
                        muteImage.classList.remove('pulsing');
                    } else {
                        muteImage.classList.add('pulsing');
                    }
                });
                
                videoContainer.appendChild(video);
                videoContainer.appendChild(muteButton);
            });
            
            // Insertar después de la imagen principal para Nudge
            imagesContainer.insertBefore(videoContainer, imagesContainer.children[1]);
            
            // Añadir secuencia animada de 02nudge solo para el proyecto Nudge
            if (item.title === "Nudge") {
                const animContainer = document.createElement('div');
                animContainer.className = 'animated-sequence';
                const img = document.createElement('img');
                img.alt = currentLang === 'es' ? 'Nudge - Secuencia dinámica' : 'Nudge - Dynamic sequence';
                img.loading = 'lazy';
                
                // Array con las imágenes 02nudge
                const images = [
                    'images/P6/02nudge-1.png',
                    'images/P6/02nudge-2.png',
                    'images/P6/02nudge-4.png'
                ];
                
                // Cargar la primera imagen
                img.src = images[0];
                animContainer.appendChild(img);
                
                // Insertar después del video
                videoContainer.parentNode.insertBefore(animContainer, videoContainer.nextSibling);
                
                let currentIndex = 0;
                // Iniciar la animación
                setInterval(() => {
                    currentIndex = (currentIndex + 1) % images.length;
                    img.src = images[currentIndex];
                }, 1000); // Cambiar cada segundo
            }
        }
    }

    // Imágenes adicionales después del video
    if (item.additionalImages && item.additionalImages.length > 0) {
        item.additionalImages.forEach(imageSrc => {
            const img = document.createElement('img');
            img.src = imageSrc;
            img.alt = `${currentLang === 'es' ? item.title : item.title_en} - ${currentLang === 'es' ? 'Imagen adicional' : 'Additional image'}`;
            img.loading = 'lazy';
            imagesContainer.appendChild(img);
        });
    }

    // Secuencia animada de imágenes (solo si no se ha mostrado antes)
    if (!hasAnimatedSequence && item.animatedSequence && item.animatedSequence.images.length > 0) {
        const animContainer = document.createElement('div');
        animContainer.className = 'animated-sequence';
        const img = document.createElement('img');
        img.alt = `${currentLang === 'es' ? item.title : item.title_en} - ${currentLang === 'es' ? 'Secuencia animada' : 'Animated sequence'}`;
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
                ${currentLang === 'es' ? prevItem.title : prevItem.title_en}
            </a>
        `;
    }

    if (nextItem) {
        navNext.innerHTML = `
            <a href="project-template.html?id=${nextItem.id}&type=${type}">
                ${currentLang === 'es' ? nextItem.title : nextItem.title_en}
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
            video.volume = 0.1;
            
            const source = document.createElement('source');
            source.src = encodeURI(videoSrc); // Codificar la URL para manejar espacios
            source.type = 'video/mp4';
            video.appendChild(source);
            
            // Crear botón de mute
            const muteButton = document.createElement('button');
            muteButton.className = 'mute-button';
            const muteImage = document.createElement('img');
            muteImage.src = 'images/P6/music.png';
            muteImage.alt = 'Toggle sound';
            muteImage.style.width = '20px';
            muteImage.style.height = '20px';
            muteImage.style.filter = 'brightness(0) invert(1)';
            muteImage.className = 'pulsing'; // Inicialmente pulsando porque el video empieza muteado
            muteButton.appendChild(muteImage);
            
            // Evento click para mute/unmute
            muteButton.addEventListener('click', () => {
                video.muted = !video.muted;
                if (!video.muted) {
                    video.volume = 0.1;
                    muteImage.classList.remove('pulsing');
                } else {
                    muteImage.classList.add('pulsing');
                }
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