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