const projectsData = [
    {
        id: 1,
        title: "Suculenta",
        shortDescription: "Diseño de producto innovador",
        fullDescription: `
            <p>Este proyecto se centró en el desarrollo de un producto innovador que resuelve problemas cotidianos de manera elegante y eficiente.</p>
            <p>El proceso incluyó extensiva investigación de usuario, prototipado iterativo y pruebas de usabilidad para garantizar una experiencia excepcional.</p>
        `,
        mainImage: "1.png",
        additionalImages: ["9.png", "10.png"],
        details: [
            "Investigación de usuario y análisis de mercado",
            "Diseño conceptual y sketching",
            "Modelado 3D y renderizado",
            "Prototipado y pruebas",
            "Documentación técnica"
        ],
        year: "2023",
        tools: ["Fusion 360", "Rhinoceros", "KeyShot"]
    },
    {
        id: 2,
        title: "Desarrollo de Concepto",
        shortDescription: "Exploración de nuevas posibilidades en diseño",
        fullDescription: `
            <p>Un proyecto conceptual que explora las posibilidades del diseño industrial en el contexto de la sostenibilidad y la economía circular.</p>
            <p>Se desarrollaron múltiples iteraciones y conceptos, culminando en una propuesta innovadora y viable.</p>
        `,
        mainImage: "2.png",
        additionalImages: ["7.png", "8.png"],
        details: [
            "Investigación de materiales sostenibles",
            "Diseño para manufactura",
            "Análisis de ciclo de vida",
            "Renderizado y visualización",
            "Presentación del concepto"
        ],
        year: "2023",
        tools: ["SolidWorks", "KeyShot", "Adobe CC"]
    },
    {
        id: 3,
        title: "Prototipo Funcional",
        shortDescription: "Del concepto a la realidad",
        fullDescription: `
            <p>Desarrollo de un prototipo funcional que demuestra la viabilidad técnica y comercial del concepto.</p>
            <p>El proyecto incluyó la selección de materiales, procesos de fabricación y pruebas de usuario.</p>
        `,
        mainImage: "3.png",
        additionalImages: ["11.jpg", "12.jpg"],
        details: [
            "Diseño mecánico detallado",
            "Selección de materiales",
            "Prototipado rápido",
            "Pruebas de usuario",
            "Documentación técnica"
        ],
        year: "2024",
        tools: ["Fusion 360", "3D Printing", "Arduino"]
    },
    {
        id: 4,
        title: "Diseño Industrial",
        shortDescription: "Innovación en diseño de productos",
        fullDescription: `
            <p>Proyecto centrado en el diseño industrial de productos de consumo, con énfasis en la funcionalidad y la estética.</p>
            <p>Se aplicaron principios de diseño centrado en el usuario y fabricación sostenible.</p>
        `,
        mainImage: "4.png",
        additionalImages: ["5.png", "6.png"],
        details: [
            "Diseño industrial avanzado",
            "Estudios ergonómicos",
            "Selección de materiales sostenibles",
            "Optimización para fabricación",
            "Documentación técnica completa"
        ],
        year: "2024",
        tools: ["Fusion 360", "KeyShot", "Adobe CC"]
    }
];

const experienceData = [
    {
        id: 1,
        title: "Técnicas de Renderizado",
        shortDescription: "Visualización fotorrealista de productos",
        fullDescription: `
            <p>Estudio detallado de técnicas avanzadas de renderizado para la presentación de productos.</p>
            <p>Desarrollo de materiales personalizados, iluminación y composición para lograr resultados fotorrealistas.</p>
        `,
        mainImage: "6.png",
        additionalImages: [],
        details: [
            "Configuración de materiales PBR",
            "Técnicas de iluminación de estudio",
            "Post-procesado y composición",
            "Optimización de renders",
            "Flujo de trabajo eficiente"
        ],
        year: "2023",
        tools: ["KeyShot", "HDR Light Studio", "Adobe Photoshop"]
    },
    {
        id: 2,
        title: "Prototipado y Pruebas",
        shortDescription: "Desarrollo y validación de prototipos",
        fullDescription: `
            <p>Metodología completa para el desarrollo y validación de prototipos funcionales.</p>
            <p>Implementación de técnicas de prototipado rápido y pruebas de usuario para validar conceptos.</p>
        `,
        mainImage: "11.jpg",
        additionalImages: ["12.jpg"],
        details: [
            "Prototipado rápido con impresión 3D",
            "Pruebas de usabilidad",
            "Iteración y refinamiento",
            "Documentación del proceso",
            "Análisis de resultados"
        ],
        year: "2024",
        tools: ["Impresión 3D", "Arduino", "Herramientas de prototipado"]
    }
];

// Función para obtener un proyecto por ID
function getProjectById(id) {
    return projectsData.find(project => project.id === parseInt(id));
}

// Función para obtener el siguiente proyecto
function getNextProject(currentId) {
    const currentIndex = projectsData.findIndex(project => project.id === parseInt(currentId));
    return projectsData[currentIndex + 1] || null;
}

// Función para obtener el proyecto anterior
function getPreviousProject(currentId) {
    const currentIndex = projectsData.findIndex(project => project.id === parseInt(currentId));
    return projectsData[currentIndex - 1] || null;
}

// Nuevas funciones para experiencia
function getExperienceById(id) {
    return experienceData.find(exp => exp.id === parseInt(id));
}

function getNextExperience(currentId) {
    const currentIndex = experienceData.findIndex(exp => exp.id === parseInt(currentId));
    return experienceData[currentIndex + 1] || null;
}

function getPreviousExperience(currentId) {
    const currentIndex = experienceData.findIndex(exp => exp.id === parseInt(currentId));
    return experienceData[currentIndex - 1] || null;
} 