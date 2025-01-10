document.addEventListener('DOMContentLoaded', () => {
    // Get project ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');

    if (!projectId) {
        window.location.href = 'index.html';
        return;
    }

    const project = getProjectById(projectId);
    
    if (!project) {
        window.location.href = 'index.html';
        return;
    }

    // Update page title
    document.title = `${project.title} - Kevin García`;

    // Populate project information
    document.getElementById('project-title').textContent = project.title;
    document.getElementById('project-description').textContent = project.shortDescription;
    document.getElementById('project-full-description').innerHTML = project.fullDescription;

    // Populate project details
    const detailsList = document.getElementById('project-details');
    const details = [
        `Año: ${project.year}`,
        'Herramientas: ' + project.tools.join(', '),
        ...project.details
    ];

    details.forEach(detail => {
        const li = document.createElement('li');
        li.textContent = detail;
        detailsList.appendChild(li);
    });

    // Populate images
    const imagesContainer = document.querySelector('.project-images');
    const mainImage = document.createElement('img');
    mainImage.src = project.mainImage;
    mainImage.alt = project.title;
    imagesContainer.appendChild(mainImage);

    project.additionalImages.forEach(imageSrc => {
        const img = document.createElement('img');
        img.src = imageSrc;
        img.alt = `${project.title} - Imagen adicional`;
        img.loading = 'lazy';
        imagesContainer.appendChild(img);
    });

    // Setup navigation
    const prevProject = getPreviousProject(projectId);
    const nextProject = getNextProject(projectId);

    const navPrevious = document.querySelector('.nav-previous');
    const navNext = document.querySelector('.nav-next');

    if (prevProject) {
        navPrevious.innerHTML = `
            <a href="project-template.html?id=${prevProject.id}">
                ${prevProject.title}
            </a>
        `;
    }

    if (nextProject) {
        navNext.innerHTML = `
            <a href="project-template.html?id=${nextProject.id}">
                ${nextProject.title}
            </a>
        `;
    }
}); 