const projectsData = [
    {
        id: 1,
        title: "Suculenta",
        shortDescription: "Diseño estético y funcional",
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

            
        `,
        mainImage: "images/P6/01nudge.png",
        videos: ["images/P6/videolargonudge.mp4"],
        additionalImages: ["images/P6/02nudge-3.png", "images/P6/02nudge-5.png","images/P6/02nudge-6.png"],
        details: [
            "Diseño mecánico detallado",
            "Selección de materiales",
            "Prototipado rápido",
            "Pruebas de usuario",
            "Documentación técnica",
            "UX/UI"
        ],
        year: "2024",
        tools: ["SolidWorks", "3D Printing", "IA", "Forja"]
    },
    {
        id: 4,
        title: "Precious Water",
        shortDescription: "Sostenibilidad en el diseño de productos",
        fullDescription: `
            <p>El proyecto responde al desafío de sostenibilidad y ahorro de agua propuesto por Dorn Bracht, introduciendo una innovadora solución en grifería que no solo conserva el agua, sino que también transforma la experiencia del usuario respecto al consumo responsable. Este sistema avanzado incorpora un diseño estético y funcional, caracterizado por un tanque de almacenamiento con forma de diamante, que captura y almacena el agua fría inicialmente desperdiciada mientras alcanza la temperatura deseada.</p>
            
        `,
        mainImage: "images/P7/10.jpg",
        additionalImages: ["images/P7/11.png"],
        details: [
            "Diseño industrial avanzado",
            "Estudios ergonómicos",
            "Selección de materiales sostenibles",
            "Optimización para fabricación",
            "Sostenibilidad"
        ],
        year: "2020",
        tools: ["SolidWorks", "Maya", "Adobe CC"]
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
        mainImage: "images/P5/12-optimized.jpg",
        additionalImages: ["images/P4/11-optimized.jpg"],
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
        mainImage: "images/P10/01kiko.png",
        videos: ["images/P10/GARCIA_kevin_Loro Marqués2.mp4"],
        additionalImages: ["images/P10/agaporni 2.png", "images/P10/agaporni.png", "images/P10/02kiko.jpg", "images/P10/03kiko.jpg"],
        details: [
            "Prototipado rápido con impresión 3D",
            "Pruebas de usabilidad",
            "Iteración y refinamiento",
            "Documentación del proceso",
            "Análisis de resultados"
        ],
        year: "2024",
        tools: ["Modelado", "Electrónica", "Herramientas de prototipado"]
    },
    {
        id: 3,
        title: "Investigación en Materiales",
        shortDescription: "Exploración de nuevos materiales y sus aplicaciones",
        fullDescription: `
            <p>Investigación en materiales innovadores y sostenibles para el diseño de productos. En este caso, la elaboración de un bioplástico a partir de la semilla del aguacate.</p>
            <p>Análisis de propiedades, comportamiento y aplicaciones potenciales en diferentes contextos de diseño.</p>
        `,
        mainImage: "images/P12/portada.png",
        videos: ["images/P12/videoaguacate.mp4"],
        additionalImages: [],
        details: [
            "Análisis de materiales sostenibles",
            "Pruebas de resistencia y durabilidad",
            "Estudios de viabilidad",
            "Experimentación con biomateriales",
            "Documentación de resultados"
        ],
        year: "2023",
        tools: ["Laboratorio de materiales", "Software de análisis", "Microscopía"]
    },
    {
        id: 4,
        title: "Reciclaje y Diseño",
        shortDescription: "Diseño circular y sostenible",
        fullDescription: `
            <p>Desarrollo de productos y soluciones basadas en principios de economía circular y reciclaje.</p>
            <p>Implementación de estrategias de diseño sostenible y reutilización de materiales.</p>
        `,
        mainImage: "images/P7/10.jpg",
        additionalImages: [],
        details: [
            "Diseño para la circularidad",
            "Gestión de residuos",
            "Optimización de recursos",
            "Análisis de ciclo de vida",
            "Estrategias de reciclaje"
        ],
        year: "2023",
        tools: ["CAD", "Software de análisis LCA", "Herramientas de prototipado"]
    },
    {
        id: 5,
        title: "Sistemas de Identidad",
        shortDescription: "Desarrollo de identidad de marca y producto",
        fullDescription: `
            <p>Creación de sistemas de identidad coherentes para productos y marcas.</p>
            <p>Desarrollo de lenguajes visuales y estrategias de comunicación integradas.</p>
        `,
        mainImage: "images/P2/10.1-optimized.png",
        additionalImages: [],
        details: [
            "Desarrollo de marca",
            "Diseño de sistemas visuales",
            "Estrategia de comunicación",
            "Guías de estilo",
            "Aplicaciones de marca"
        ],
        year: "2024",
        tools: ["Adobe CC", "Figma", "Herramientas de diseño gráfico"]
    },
    {
        id: 6,
        title: "Creatividad más allá de los Materiales",
        shortDescription: "Exploración de conceptos innovadores",
        fullDescription: `
            <p>Investigación y desarrollo de conceptos que trascienden las limitaciones materiales tradicionales.</p>
            <p>Exploración de nuevas formas de interacción y experiencia de usuario.</p>
        `,
        mainImage: "images/P6/01nudge.png",
        additionalImages: [],
        details: [
            "Conceptualización avanzada",
            "Diseño especulativo",
            "Innovación en interacciones",
            "Experiencias inmersivas",
            "Prototipado conceptual"
        ],
        year: "2024",
        tools: ["Realidad Virtual", "Herramientas de prototipado", "Software de modelado"]
    },
    {
        id: 7,
        title: "UX/UI",
        shortDescription: "Diseño de experiencias digitales",
        fullDescription: `
            <p>Diseño de interfaces y experiencias de usuario centradas en la usabilidad y accesibilidad.</p>
            <p>Desarrollo de soluciones digitales intuitivas y efectivas.</p>
        `,
        mainImage: "images/P6/02nudge-3.png",
        additionalImages: [],
        details: [
            "Investigación de usuarios",
            "Arquitectura de información",
            "Diseño de interacción",
            "Prototipado de interfaces",
            "Pruebas de usabilidad"
        ],
        year: "2024",
        tools: ["Figma", "Adobe XD", "Protopie", "Herramientas de testing"]
    },
    {
        id: 8,
        title: "Concursos",
        shortDescription: "Participación en competiciones de diseño",
        fullDescription: `
            <p>Experiencia en concursos nacionales e internacionales de diseño.</p>
            <p>Desarrollo de propuestas innovadoras bajo restricciones específicas.</p>
        `,
        mainImage: "images/P1/1.1-optimized.png",
        additionalImages: [],
        details: [
            "Diseño conceptual",
            "Presentación de proyectos",
            "Trabajo bajo presión",
            "Innovación dirigida",
            "Competencias internacionales"
        ],
        year: "2023",
        tools: ["Software de presentación", "Herramientas de visualización", "CAD"]
    },
    {
        id: 9,
        title: "Inteligencia Artificial",
        shortDescription: "Integración de IA en diseño",
        fullDescription: `
            <p>Exploración y aplicación de tecnologías de IA en el proceso de diseño.</p>
            <p>Desarrollo de soluciones que combinan diseño tradicional con inteligencia artificial.</p>
        `,
        mainImage: "images/P6/02nudge-5.png",
        additionalImages: [],
        details: [
            "Generación de conceptos con IA",
            "Optimización de diseños",
            "Análisis predictivo",
            "Automatización de procesos",
            "Personalización inteligente"
        ],
        year: "2024",
        tools: ["Python", "TensorFlow", "Herramientas de IA", "Software de diseño"]
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