const projectsData = [
    {
        id: 1,
        title: "Suculenta",
        shortDescription: "Diseño estetico y funcional",
        fullDescription: `
            <p>Colaboración con <a href="https://www.balvi.com/es/" target="_blank">Balvi</a> para combinar funcionalidad y estética en entornos de cocina y oficina. Tras un detallado análisis de la demanda en su plataforma, se diseña este innovador artículo que imita una suculenta, desplegándose en posavasos funcionales y decorativos. Cada posavasos mantiene la estética de las suculentas, ofreciendo tanto practicidad como un elemento decorativo que realza cualquier espacio. Este diseño ejemplifica cómo la funcionalidad cotidiana puede convertirse en arte decorativo.</p>
            
        `,
        mainImage: "images/P1/1.1-optimized.png",
        additionalImages: ["images/P1/1-optimized.png", "images/P1/2-optimized.png", "images/P1/3-optimized.png", "images/P1/4-optimized.png"],
        details: [
            "Investigación de usuario y análisis de mercado",
            "Diseño conceptual y sketching",
            "Modelado 3D y renderizado",
            "Prototipado y pruebas",
            "Documentación técnica"
        ],
        year: "2023",
        tools: ["SolidWorks", "Rhinoceros", "KeyShot", "Impresión 3D"]
    },
    {
        id: 2,
        title: "Flora",
        shortDescription: "Exploración de nuevas posibilidades en diseño",
        fullDescription: `
            <p>Una lámpara inteligente y ambiental diseñada en colaboración con <a href="https://bover.es/us/es/" target="_blank">Bover</a>, que buscaba capturar la esencia del espíritu mediterráneo combinado con innovación tecnológica. Esta lámpara multifuncional no solo ofrece iluminación de ambiente sino también de acento, adaptándose a diversas necesidades y momentos. Fabricada con materiales que evocan la calidez y naturalidad del Mediterráneo, Flora se destaca por su capacidad de crear atmósferas envolventes y acogedoras en cualquier espacio, a la vez que integra tecnología de vanguardia para un control intuitivo y versátil de la iluminación.</p>
        `,
        mainImage: "images/P2/10.1-optimized.png",
        additionalImages: ["images/P2/7-optimized.png"],
        animatedSequence: {
            images: [
                "images/P2/8-optimized.png",
                "images/P2/9-optimized.png",
                "images/P2/10-optimized.png"
            ],
            interval: 1000 // intervalo en milisegundos entre cada imagen
        },
        videos: ["images/P2/comp 1.mp4", "images/P2/secuencia 01.mp4"],
        details: [
            "Investigación de materiales sostenibles",
            "Diseño para manufactura",
            "Robótica y programación",
            "Análisis de ciclo de vida",
            "Renderizado y visualización",
            "Presentación del concepto"
        ],
        year: "2023",
        tools: ["SolidWorks", "KeyShot", "Adobe CC", "Arduino"]
    },
    {
        id: 3,
        title: "Nudge",
        shortDescription: "Del concepto a la realidad",
        fullDescription: `
            <p>Nudge es un sistema multiplataforma
diseñado para acompañar a personas
adultas con TDAH, u otras neurodivergencias,
en su vida diaria para ayudarlas
a gestionar sus actividades y reducir la
dependencia de la medicación. Este sistema
incluye una aplicación que puede
utilizarse en diversos dispositivos electrónicos
como teléfonos, ordenadores,
portátiles, tabletas, etc. Además, cuenta
con un dispositivo innovador en formato
de wearable que se desarrolla en este
proyecto.</p>
<p>El dispositivo wearable Nudge se concibe
como un compañero constante, que
utiliza inteligencia artificial para proporcionar
recordatorios personalizados,
gestionar tareas y citas, y ofrecer apoyo
en tiempo real. A lo largo del desarrollo
de este proyecto, se han abordado varios
desafíos específicos del TDAH, como el
"time blindness" y la parálisis del TDAH,
integrando soluciones tecnológicas
avanzadas para mejorar la autonomía
de los usuarios. Además, el diseño de
Nudge considera la importancia de la
estética y la personalización, evitando
que el dispositivo tenga una apariencia
médica y permitiendo que se integre de
manera armoniosa en el estilo personal
del usuario.</p>
            
        `,
        mainImage: "images/P6/01nudge.png",
        videos: ["images/P6/videolargonudge.mp4"],
        additionalImages: ["images/P3/11-optimized.jpg", "images/P3/12-optimized.jpg"],
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
        mainImage: "images/P4/4-optimized.png",
        additionalImages: ["images/P4/5-optimized.png", "images/P4/6-optimized.png"],
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
        mainImage: "images/P5/6-optimized.png",
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
        mainImage: "images/P5/11-optimized.jpg",
        additionalImages: ["images/P5/12-optimized.jpg"],
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