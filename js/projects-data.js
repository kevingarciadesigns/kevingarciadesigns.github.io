const projectsData = [
    {
        id: 1,
        title: "Suculenta",
        title_en: "Succulent",
        shortDescription: "Diseño estético y funcional",
        shortDescription_en: "Aesthetic and functional design",
        fullDescription: `
            <p>Colaboración con <a href="https://www.balvi.com/es/" target="_blank">Balvi</a> para combinar funcionalidad y estética en entornos de cocina y oficina. Tras un detallado análisis de la demanda en su plataforma, se diseña este innovador artículo que imita una suculenta, desplegándose en posavasos funcionales y decorativos. Cada posavasos mantiene la estética de las suculentas, ofreciendo tanto practicidad como un elemento decorativo que realza cualquier espacio. Este diseño ejemplifica cómo la funcionalidad cotidiana puede convertirse en arte decorativo.</p>
        `,
        fullDescription_en: `
            <p>Collaboration with <a href="https://www.balvi.com/es/" target="_blank">Balvi</a> to combine functionality and aesthetics in kitchen and office environments. After a detailed analysis of demand on their platform, this innovative item was designed to mimic a succulent, unfolding into functional and decorative coasters. Each coaster maintains the aesthetics of succulents, offering both practicality and a decorative element that enhances any space. This design exemplifies how everyday functionality can be transformed into decorative art.</p>
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
        details_en: [
            "User research and market analysis",
            "Conceptual design and sketching",
            "3D modeling and rendering",
            "Prototyping and testing",
            "Technical documentation"
        ],
        year: "2023",
        tools: ["SolidWorks", "Rhinoceros", "KeyShot", "Impresión 3D"],
        tools_en: ["SolidWorks", "Rhinoceros", "KeyShot", "3D Printing"]
    },
    {
        id: 2,
        title: "Flora",
        title_en: "Flora",
        shortDescription: "Exploración de nuevas posibilidades en diseño",
        shortDescription_en: "Exploring new design possibilities",
        fullDescription: `
            <p>Una lámpara inteligente y ambiental diseñada en colaboración con <a href="https://bover.es/us/es/" target="_blank">Bover</a>, que buscaba capturar la esencia del espíritu mediterráneo combinado con innovación tecnológica. Esta lámpara multifuncional no solo ofrece iluminación de ambiente sino también de acento, adaptándose a diversas necesidades y momentos. Fabricada con materiales que evocan la calidez y naturalidad del Mediterráneo, Flora se destaca por su capacidad de crear atmósferas envolventes y acogedoras en cualquier espacio, a la vez que integra tecnología de vanguardia para un control intuitivo y versátil de la iluminación.</p>
        `,
        fullDescription_en: `
            <p>A smart and ambient lamp designed in collaboration with <a href="https://bover.es/us/es/" target="_blank">Bover</a>, aiming to capture the essence of the Mediterranean spirit combined with technological innovation. This multifunctional lamp offers both ambient and accent lighting, adapting to various needs and moments. Made with materials that evoke the warmth and naturalness of the Mediterranean, Flora stands out for its ability to create immersive and welcoming atmospheres in any space, while integrating cutting-edge technology for intuitive and versatile lighting control.</p>
        `,
        mainImage: "images/P2/10.1-optimized.png",
        additionalImages: ["images/P2/7-optimized.png"],
        animatedSequence: {
            images: [
                "images/P2/8-optimized.png",
                "images/P2/9-optimized.png",
                "images/P2/10-optimized.png"
            ],
            interval: 1000
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
        details_en: [
            "Sustainable materials research",
            "Design for manufacturing",
            "Robotics and programming",
            "Life cycle analysis",
            "Rendering and visualization",
            "Concept presentation"
        ],
        year: "2023",
        tools: ["SolidWorks", "KeyShot", "Adobe CC", "Arduino"],
        tools_en: ["SolidWorks", "KeyShot", "Adobe CC", "Arduino"]
    },
    {
        id: 3,
        title: "Nudge",
        title_en: "Nudge",
        shortDescription: "Del concepto a la realidad",
        shortDescription_en: "From concept to reality",
        fullDescription: `
            <p>Nudge es un sistema multiplataforma diseñado para acompañar a personas adultas con TDAH, u otras neurodivergencias, en su vida diaria para ayudarlas a gestionar sus actividades y reducir la dependencia de la medicación. Este sistema incluye una aplicación que puede utilizarse en diversos dispositivos electrónicos como teléfonos, ordenadores, portátiles, tabletas, etc. Además, cuenta con un dispositivo innovador en formato de wearable que se desarrolla en este proyecto.</p>
        `,
        fullDescription_en: `
            <p>Nudge is a multi-platform system designed to accompany adults with ADHD, or other neurodivergences, in their daily lives to help them manage their activities and reduce medication dependence. This system includes an application that can be used on various electronic devices such as phones, computers, laptops, tablets, etc. Additionally, it features an innovative wearable device that is developed in this project.</p>
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
        details_en: [
            "Detailed mechanical design",
            "Materials selection",
            "Rapid prototyping",
            "User testing",
            "Technical documentation",
            "UX/UI"
        ],
        year: "2024",
        tools: ["SolidWorks", "Impresión 3D", "IA", "Forja"],
        tools_en: ["SolidWorks", "3D Printing", "AI", "Forge"]
    },
    {
        id: 4,
        title: "Precious Water",
        title_en: "Precious Water",
        shortDescription: "Sostenibilidad en el diseño de productos",
        shortDescription_en: "Sustainability in product design",
        fullDescription: `
            <p>El proyecto responde al desafío de sostenibilidad y ahorro de agua propuesto por Dorn Bracht, introduciendo una innovadora solución en grifería que no solo conserva el agua, sino que también transforma la experiencia del usuario respecto al consumo responsable. Este sistema avanzado incorpora un diseño estético y funcional, caracterizado por un tanque de almacenamiento con forma de diamante, que captura y almacena el agua fría inicialmente desperdiciada mientras alcanza la temperatura deseada.</p>
        `,
        fullDescription_en: `
            <p>The project responds to the sustainability and water conservation challenge proposed by Dorn Bracht, introducing an innovative faucet solution that not only conserves water but also transforms the user experience regarding responsible consumption. This advanced system incorporates an aesthetic and functional design, characterized by a diamond-shaped storage tank that captures and stores initially wasted cold water while reaching the desired temperature.</p>
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
        details_en: [
            "Advanced industrial design",
            "Ergonomic studies",
            "Sustainable materials selection",
            "Manufacturing optimization",
            "Sustainability"
        ],
        year: "2020",
        tools: ["SolidWorks", "Maya", "Adobe CC"],
        tools_en: ["SolidWorks", "Maya", "Adobe CC"]
    }
];

const experienceData = [
    {
        id: 1,
        title: "Técnicas de Renderizado",
        title_en: "Rendering Techniques",
        shortDescription: "Visualización fotorrealista de productos",
        shortDescription_en: "Photorealistic product visualization",
        fullDescription: `
            <p>Estudio detallado de técnicas avanzadas de renderizado para la presentación de productos.</p>
            <p>Desarrollo de materiales personalizados, iluminación y composición para lograr resultados fotorrealistas.</p>
        `,
        fullDescription_en: `
            <p>Detailed study of advanced rendering techniques for product presentation.</p>
            <p>Development of custom materials, lighting, and composition to achieve photorealistic results.</p>
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
        details_en: [
            "PBR materials setup",
            "Studio lighting techniques",
            "Post-processing and composition",
            "Render optimization",
            "Efficient workflow"
        ],
        year: "2023",
        tools: ["KeyShot", "HDR Light Studio", "Adobe Photoshop"],
        tools_en: ["KeyShot", "HDR Light Studio", "Adobe Photoshop"]
    },
    {
        id: 2,
        title: "Investigación en Materiales",
        title_en: "Materials Research",
        shortDescription: "Exploración de nuevos materiales y sus aplicaciones",
        shortDescription_en: "Exploration of new materials and their applications",
        fullDescription: `
            <p>Investigación en materiales innovadores y sostenibles para el diseño de productos. En este caso, la elaboración de un bioplástico a partir de la semilla del aguacate.</p>
            <p>Análisis de propiedades, comportamiento y aplicaciones potenciales en diferentes contextos de diseño.</p>
        `,
        fullDescription_en: `
            <p>Research on innovative and sustainable materials for product design. In this case, the development of a bioplastic from avocado seed.</p>
            <p>Analysis of properties, behavior, and potential applications in different design contexts.</p>
        `,
        mainImage: "images/P12/portada.png",
        videos: ["images/P12/videoaguacate.mp4"],
        additionalImages: ["images/P12/5.jpg", "images/P12/7.jpg"],
        animatedSequence: {
            images: [
                "images/P12/Captura1.JPG",
                "images/P12/Captura2.JPG",
                "images/P12/Captura3.JPG",
                "images/P12/Captura4.JPG",
                "images/P12/Captura5.JPG",
                "images/P12/Captura6.JPG",
                "images/P12/Captura7.JPG",
                "images/P12/Captura8.JPG",
                "images/P12/Captura9.JPG",
                "images/P12/Captura10.JPG",
                "images/P12/Captura11.JPG"
            ],
            interval: 1000
        },
        details: [
            "Análisis de materiales sostenibles",
            "Pruebas de resistencia y durabilidad",
            "Estudios de viabilidad",
            "Experimentación con biomateriales",
            "Documentación de resultados"
        ],
        details_en: [
            "Sustainable materials analysis",
            "Strength and durability testing",
            "Feasibility studies",
            "Biomaterials experimentation",
            "Results documentation"
        ],
        year: "2022",
        tools: ["Laboratorio de materiales", "Software de análisis", "Microscopía"],
        tools_en: ["Materials laboratory", "Analysis software", "Microscopy"]
    },
    {
        id: 3,
        title: "Exploded views",
        title_en: "Exploded views",
        shortDescription: "Análisis y desarrollo de piezas 3D",
        shortDescription_en: "Analysis and development of 3D parts",
        fullDescription: `
            <p>Metodología completa para el desarrollo y validación de diseños 3D.</p>
            <p>Implementación de técnicas de modelado 3D para validar conceptos.</p>
        `,
        fullDescription_en: `
            <p>Complete methodology for the development and validation of 3D designs.</p>
            <p>Implementation of 3D modeling techniques to validate concepts.</p>
        `,
        mainImage: "images/P3/6-optimized.png",
        additionalImages: ["images/P3/5-optimized.png"],
        details: [
            "Prototipado rápido con impresión 3D",
            "Pruebas de usabilidad",
            "Iteración y refinamiento",
            "Documentación del proceso",
            "Análisis de resultados"
        ],
        details_en: [
            "Rapid prototyping with 3D printing",
            "Usability testing",
            "Iteration and refinement",
            "Process documentation",
            "Results analysis"
        ],
        year: "2024",
        tools: ["Modelado", "Electrónica", "Herramientas de prototipado"],
        tools_en: ["Modeling", "Electronics", "Prototyping tools"]
    },
    {
        id: 4,
        title: "Reciclaje y Diseño",
        title_en: "Recycling and Design",
        shortDescription: "Diseño circular y sostenible",
        shortDescription_en: "Circular and sustainable design",
        fullDescription: `
            <p>Desarrollo de unas gafas a partir de plástico reciclado.</p>
            <p>Implementación de estrategias de diseño sostenible y reutilización de materiales junto con el aprendizaje de herramientas de corte láser y termoformado.</p>
        `,
        fullDescription_en: `
            <p>Development of glasses made from recycled plastic.</p>
            <p>Implementation of sustainable design strategies and material reuse along with learning laser cutting and thermoforming tools.</p>
        `,
        mainImage: "images/P14/01potatsio.png",
        additionalImages: ["images/P14/03potatsio.png", "images/P14/02potatsio.png", "images/P14/Garcia_kevin_sunglasses.png", "images/P14/05potatsio.JPG"],
        details: [
            "Diseño para la circularidad",
            "Gestión de residuos",
            "Optimización de recursos",
            "Análisis de ciclo de vida",
            "Estrategias de reciclaje"
        ],
        details_en: [
            "Design for circularity",
            "Waste management",
            "Resource optimization",
            "Life cycle analysis",
            "Recycling strategies"
        ],
        year: "2021",
        tools: ["Corte láser", "Termoformado", "Herramientas de prototipado"],
        tools_en: ["Laser cutting", "Thermoforming", "Prototyping tools"]
    },
    {
        id: 5,
        title: "Sistemas de Identidad",
        title_en: "Identity Systems",
        shortDescription: "Desarrollo de identidad de marca y producto",
        shortDescription_en: "Brand and product identity development",
        fullDescription: `
            <p>Creación de sistemas de identidad coherentes para productos y marcas.</p>
            <p>Desarrollo de lenguajes visuales y estrategias de comunicación integradas.</p>
        `,
        fullDescription_en: `
            <p>Creation of coherent identity systems for products and brands.</p>
            <p>Development of visual languages and integrated communication strategies.</p>
        `,
        mainImage: "images/P11/01takodaki.png",
        additionalImages: ["images/P11/02takodaki.png", "images/P11/03takodaki.png", "images/P11/04.1takodaki.png", "images/P11/04.2takodaki.png", "images/P11/05takodaki.png"],
        details: [
            "Desarrollo de marca",
            "Diseño de sistemas visuales",
            "Estrategia de comunicación",
            "Guías de estilo",
            "Aplicaciones de marca"
        ],
        details_en: [
            "Brand development",
            "Visual systems design",
            "Communication strategy",
            "Style guides",
            "Brand applications"
        ],
        year: "2023",
        tools: ["Adobe CC", "Figma", "Herramientas de diseño gráfico"],
        tools_en: ["Adobe CC", "Figma", "Graphic design tools"]
    },
    {
        id: 6,
        title: "Creatividad más allá de los Materiales",
        title_en: "Creativity Beyond Materials",
        shortDescription: "Exploración de conceptos innovadores",
        shortDescription_en: "Exploration of innovative concepts",
        fullDescription: `
            <p>Investigación y desarrollo de conceptos que trascienden las limitaciones materiales tradicionales.</p>
            <p>Exploración de nuevas formas de interacción y experiencia de usuario.</p>
        `,
        fullDescription_en: `
            <p>Research and development of concepts that transcend traditional material limitations.</p>
            <p>Exploration of new forms of interaction and user experience.</p>
        `,
        mainImage: "images/P8/01sucreta.png",
        additionalImages: ["images/P8/02sucreta.jpg", "images/p8/03sucreta.png", "images/p8/04sucreta.png", "images/p8/05sucreta.png"],
        videos: ["images/P8/sucreta_video.mp4"],
        details: [
            "Conceptualización avanzada",
            "Diseño especulativo",
            "Innovación en interacciones",
            "Experiencias inmersivas",
            "Prototipado conceptual"
        ],
        details_en: [
            "Advanced conceptualization",
            "Speculative design",
            "Innovation in interactions",
            "Immersive experiences",
            "Conceptual prototyping"
        ],
        year: "2024",
        tools: ["Manipulación de alimentos", "Herramientas de prototipado", "Software de modelado"],
        tools_en: ["Food manipulation", "Prototyping tools", "Modeling software"]
    },
    {
        id: 7,
        title: "UX/UI",
        title_en: "UX/UI",
        shortDescription: "Diseño de experiencias digitales",
        shortDescription_en: "Digital experience design",
        fullDescription: `
            <p>Diseño de interfaces y experiencias de usuario centradas en la usabilidad y accesibilidad.</p>
            <p>Desarrollo de soluciones digitales intuitivas y efectivas.</p>
        `,
        fullDescription_en: `
            <p>Design of user interfaces and experiences focused on usability and accessibility.</p>
            <p>Development of intuitive and effective digital solutions.</p>
        `,
        mainImage: "images/P9/01tiner.png",
        additionalImages: ["images/P9/03tiner.png","images/P9/02tiner.png"],
        videos: ["images/P9/Tiner_final.mp4"],
        details: [
            "Investigación de usuarios",
            "Arquitectura de información",
            "Diseño de interacción",
            "Prototipado de interfaces",
            "Pruebas de usabilidad"
        ],
        details_en: [
            "User research",
            "Information architecture",
            "Interaction design",
            "Interface prototyping",
            "Usability testing"
        ],
        year: "2024",
        tools: ["Figma", "Adobe XD", "Protopie", "Herramientas de testing"],
        tools_en: ["Figma", "Adobe XD", "Protopie", "Testing tools"]
    },
    {
        id: 8,
        title: "Prototipado y Pruebas",
        title_en: "Prototyping and Testing",
        shortDescription: "Desarrollo y validación de prototipos",
        shortDescription_en: "Development and validation of prototypes",
        fullDescription: `
            <p>Metodología completa para el desarrollo y validación de prototipos funcionales.</p>
            <p>Implementación de técnicas de prototipado rápido y pruebas de usuario para validar conceptos.</p>
        `,
        fullDescription_en: `
            <p>Complete methodology for the development and validation of functional prototypes.</p>
            <p>Implementation of rapid prototyping techniques and user testing to validate concepts.</p>
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
        details_en: [
            "Rapid prototyping with 3D printing",
            "Usability testing",
            "Iteration and refinement",
            "Process documentation",
            "Results analysis"
        ],
        year: "2024",
        tools: ["Modelado", "Electrónica", "Herramientas de prototipado"],
        tools_en: ["Modeling", "Electronics", "Prototyping tools"]
    },
    {
        id: 9,
        title: "Inteligencia Artificial",
        title_en: "Artificial Intelligence",
        shortDescription: "Integración de IA en diseño",
        shortDescription_en: "AI integration in design",
        fullDescription: `
            <p>Exploración y aplicación de tecnologías de IA en el proceso de diseño.</p>
            <p>Desarrollo de soluciones que combinan diseño tradicional con inteligencia artificial.</p>
        `,
        fullDescription_en: `
            <p>Exploration and application of AI technologies in the design process.</p>
            <p>Development of solutions that combine traditional design with artificial intelligence.</p>
        `,
        mainImage: "images/P13/01.3water.png",
        additionalImages: [],
        animatedSequence: {
            images: [
                "images/P13/01.1water.png",
                "images/P13/01.2water.png",
                "images/P13/01.3water.png",
                "images/P13/01.4water.png"
            ],
            interval: 800
        },
        details: [
            "Generación de conceptos con IA",
            "Optimización de diseños",
            "Análisis predictivo",
            "Automatización de procesos",
            "Personalización inteligente"
        ],
        details_en: [
            "AI concept generation",
            "Design optimization",
            "Predictive analysis",
            "Process automation",
            "Intelligent personalization"
        ],
        year: "2024",
        tools: ["Python", "StableDifussion", "Herramientas de IA", "Software de diseño"],
        tools_en: ["Python", "StableDifussion", "AI tools", "Design software"]
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