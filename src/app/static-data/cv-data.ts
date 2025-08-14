// src/app/static-data/cv-data.ts
export interface Experience {
    title: string;
    company: string;
    period: string;
    description: string[];
}

export interface Project {
    id?: string;
    title: string;
    description: string;
    technologies: string[];
    link?: string;
}

export const CV_DATA = {
    profile: {
        name: 'Jean Carlos Rodríguez',
        profileImageUrl: './assets/images/profile.png', // Ruta a tu imagen de perfil
        location: 'Matanzas, Cuba',
        email: 'rodriguezjeancarlosrodriguez@gmail.com',
        phone: '+53 54410204',
        portfolio: 'portfolio.onrender.com',
        linkedin: 'https://www.linkedin.com/in/jeancarlosrr',
        github: 'https://github.com/rodriguez2508',
        bio: 'Ingeniero Informático Full-Stack con sólida experiencia en el desarrollo de aplicaciones web escalables y centradas en el usuario, utilizando un stack tecnológico moderno que incluye Angular, NestJS y PostgreSQL.',
        aboutMe: {
            description: 'Liderazgo comprobado en proyectos de desarrollo de software, desde la concepción hasta la implementación, como se demuestra en el lanzamiento de Linki, una innovadora red social cubana para transporte.'
        },
        summary: 'Full-Stack Developer (TypeScript) especializado en la creación de aplicaciones web robustas y escalables. Mi enfoque es transformar requisitos de negocio en soluciones técnicas eficientes, con experiencia comprobada en: Frontend avanzado: Angular (NgRx/SignalStore), PWAs, Service Workers y despliegue a APK con Capacitor. Backend robusto: NestJS / Node.js para APIs RESTful, WebSockets y microservicios. Bases de datos: Diseño y optimización de esquemas en PostgreSQL y MongoDB. Calidad y Testing: Pruebas unitarias (Jasmine/Karma) y E2E (Playwright) para garantizar la fiabilidad del software.'
    },
    education: [
        {
            degree: 'Ingeniería Informática',
            institution: 'Universidad de Matanzas “Camilo Cienfuegos”',
            year: 'Graduado 2022',
            project: 'Desarrollo de una aplicación web Full-Stack para solicitud de taxis, utilizando Angular (v17) y NestJS. El sistema optimizó la asignación de viajes en un 30%.'
        }
    ],
    experience: [
        {
            title: 'Freelance Full-Stack Developer',
            company: 'Matanzas, Cuba',
            period: 'Enero 2023 – Presente',
            description: [
                'Lideré el ciclo completo de desarrollo de Linki, una red social de transporte, utilizando Angular y NestJS. Se logró una reducción del 40% en los tiempos de coordinación de viajes para los usuarios.',
                'Migré una aplicación empresarial de Angular 16 a Angular 19, mejorando el rendimiento de carga en un 25% y actualizando más de 50 dependencias críticas.',
                'Implementé un sistema CRM con un bot de WhatsApp integrado (NestJS, Angular v19), automatizando el 80% de las consultas frecuentes y reduciendo el tiempo de respuesta al cliente en un 50%.',
                'Aumenté la cobertura de pruebas unitarias (Jasmine/Karma) del 40% al 92% en un proyecto clave, minimizando la introducción de bugs en producción en un 60%.'
            ]
        }
    ] as Experience[],
    projects: [
        {
            id: 'linki',
            title: 'Linki – Red Social para Transporte',
            description: 'Plataforma Full Stack desarrollada con Angular, NestJS y PostgreSQL que revoluciona la gestión del transporte personal. Linki integra autenticación con **Google OAuth** y **WhatsApp**, permitiendo a los usuarios iniciar sesión de manera segura y flexible. La aplicación incluye un sistema de **roles** para gestionar permisos y un manejo complejo de estados utilizando **Signals** para garantizar una experiencia de usuario fluida y reactiva. La gestión de mapas y rutas en tiempo real se realiza con **OpenLayers**, incluyendo cálculo de distancias geoespaciales entre puntos y optimización de rutas mediante **Three.js**. Además, se implementó un sistema de chat en tiempo real con **Socket.IO** y se integró **PostgreSQL** para el almacenamiento de datos. Para mejorar la escalabilidad, se utilizaron colas en **Redis** con **BullMQ** y se añadió un sistema de manejo de archivos en la nube para almacenar y gestionar documentos e imágenes de manera eficiente.',
            technologies: ['TypeScript', 'Angular', 'NestJS', 'TypeORM', 'Socket.IO', 'OpenStreetMap', 'Google OAuth', 'WhatsApp API', 'Signals', 'Three.js', 'PostgreSQL', 'Redis', 'BullMQ', 'Cloud Storage'],
            link: 'geoloc-app.onrender.com'
        },
        {
            id: 'crm',
            title: 'CRM con Bot de WhatsApp',
            description: 'Sistema de gestión de clientes desarrollado con NestJS y Angular v19 que utiliza la librería **Baileys** para la conexión con WhatsApp. El CRM permite a los usuarios iniciar sesión con su cuenta de WhatsApp, automatizar procesos de comunicación, gestionar tickets y centralizar la interacción con clientes. Además, se integra con **MongoDB** para el almacenamiento de datos y ofrece funcionalidades avanzadas como la exportación de datos en múltiples formatos (CSV, JSON) y la automatización basada en flujos de procesos. Este proyecto redujo el tiempo de respuesta manual en un 50% y mejoró la eficiencia en la gestión de clientes.',
            technologies: ['NestJS', 'Angular', 'TypeScript', 'Baileys', 'WhatsApp API', 'MongoDB', 'Automation', 'Data Export'],
        },
        {
            id: 'migracion-angular',
            title: 'Migración y Modernización de Angular',
            description: 'Proyecto de actualización de una aplicación de Angular 16 a Angular 19, implementando nuevas características como Signals y takeUntilDestroyed para mejorar la gestión de estado y prevenir fugas de memoria. Integración de la librería de internacionalización (i18n) de Angular para soportar múltiples idiomas en una aplicación. Se marcaron textos para traducción, se generaron archivos XLF y se configuró la compilación para diferentes idiomas, mejorando la accesibilidad y alcance global de la aplicación.',
            technologies: ['Angular', 'TypeScript', 'NgRx', 'SignalStore', 'i18n']
        },
        {
            id: 'geoapp',
            title: 'GeoApp – Mapa Interactivo',
            description: 'Aplicación frontend desarrollada con Angular y OpenLayers que ofrece geolocalización en tiempo real, cálculo de rutas a través de la API de OpenRouteService, y gestión avanzada de mapas. La aplicación permite la creación, actualización y eliminación de marcadores en el mapa, así como la visualización de información detallada de cada ubicación. Diseñada con un enfoque responsive, GeoApp se adapta perfectamente a dispositivos móviles y de escritorio, garantizando una experiencia de usuario óptima en cualquier pantalla.',
            technologies: ['Angular', 'OpenLayers', 'OpenRouteService', 'TypeScript', 'Responsive Design'],
            link: 'github.com/rodriguez2508/GeoApp'
        },
        {
            id: 'staticfiles',
            title: 'Backend-StaticFiles – Servidor de Archivos Estáticos',
            description: 'Aplicación backend desarrollada con NestJS que utiliza la librería `@nestjs/serve-static` para servir archivos estáticos del frontend, permitiendo el despliegue de aplicaciones monolíticas de manera eficiente. Este proyecto simplifica la gestión de archivos estáticos (HTML, CSS, JavaScript) al integrarlos directamente en el backend, eliminando la necesidad de un servidor web separado. Además, se implementaron configuraciones avanzadas para optimizar el rendimiento, como la compresión de archivos y el manejo de caché, garantizando una experiencia de usuario rápida y fluida.',
            technologies: ['NestJS', '@nestjs/serve-static', 'TypeScript', 'Node.js', 'Performance Optimization'],
            link: 'github.com/rodriguez2508/Backend-StaticFiles'
        },
        {
            id: 'angular-unit-test',
            title: 'AngularUnitTest – Pruebas Unitarias en Angular',
            description: 'Proyecto de demostración en Angular que utiliza Jasmine y Karma para implementar pruebas unitarias en el `AppComponent`, logrando una cobertura de código del 90%. Este enfoque garantiza la estabilidad y calidad del código en producción, al validar el comportamiento esperado de los componentes clave. Las pruebas incluyen la verificación de la inicialización del componente, la interacción con servicios y la correcta renderización de la interfaz de usuario. Este proyecto sirve como base para implementar pruebas unitarias en otros componentes y servicios de la aplicación.',
            technologies: ['Angular', 'Jasmine', 'Karma', 'Unit Testing', 'Code Coverage'],
            link: 'github.com/rodriguez2508/angular-unit-test'
        },
        {
            id: 'anonimato-flask',
            title: 'Anonimato Flask – Navegación y Control de Identidad Tor en Linux',
            description: 'Proyecto en Python + Flask que permite controlar el servicio Tor en un sistema Linux a través de una API REST. Incluye funcionalidades como iniciar/detener Tor, verificar el estado y rotar la identidad de Tor automáticamente para navegar anónimamente. El proyecto utiliza una estructura modular con Flask (Blueprints y servicios separados) y la librería `stem` para interactuar con el puerto de control de Tor. Además, permite acceder a la IP pública real y la IP a través de Tor, ofreciendo una solución completa para la navegación anónima.',
            technologies: ['Python', 'Flask', 'Tor', 'stem', 'API REST', 'Linux', 'Blueprints'],
            link: 'github.com/rodriguez2508/Anonimato-Flask'
        }
    ] as Project[],
    skills: {
        languages: ['TypeScript', 'JavaScript', 'SQL', 'Python'],
        frameworks: ['Angular (NgRx, SignalStore)', 'NestJS', 'Node.js', 'TypeORM', 'Socket.IO', 'OpenLayers', 'Capacitor', 'Flask'],
        databases: ['PostgreSQL', 'MongoDB', 'Redis'],
        testing: ['Jasmine', 'Karma', 'Playwright'],
        tools: ['Git', 'GitHub', 'VS Code', 'Docker', 'PWAs', 'Tor', 'stem'],
    }
};