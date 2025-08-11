// src/app/static-data/cv-data.ts
export interface Experience {
    title: string;
    company: string;
    period: string;
    description: string[];
}

export interface Project {
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
            title: 'Linki – Red Social para Transporte',
            description: 'Plataforma Full Stack con Angular, NestJS y PostgreSQL. Integra WebSockets (Socket.IO) para chat en tiempo real y OpenLayers para geolocalización precisa.',
            technologies: ['TypeScript', 'Angular', 'NestJS', 'TypeORM', 'Socket.IO', 'OpenStreetMap', 'Google OAuth'],
            link: 'linki-cuba.onrender.com'
        },
        {
            title: 'CRM con Bot de WhatsApp',
            description: 'Sistema de gestión de clientes desarrollado con NestJS y Angular v19. Integra una API de WhatsApp para automatizar la comunicación y gestión de tickets. Resultado: Reducción del 50% en el tiempo de respuesta manual y centralización de la comunicación con clientes.',
            technologies: ['NestJS', 'Angular', 'TypeScript', 'WhatsApp API', 'PostgreSQL']
        },
        {
            title: 'Migración y Modernización de Angular',
            description: 'Proyecto de actualización de una aplicación de Angular 16 a Angular 19, implementando nuevas características como Signals y takeUntilDestroyed para mejorar la gestión de estado y prevenir fugas de memoria.',
            technologies: ['Angular', 'TypeScript', 'NgRx', 'SignalStore']
        },
        {
            title: 'GeoApp – Mapa Interactivo',
            description: 'Aplicación frontend con Angular y OpenLayers que ofrece geolocalización en tiempo real y cálculo de rutas a través de la API de OpenRouteService.',
            technologies: ['Angular', 'OpenLayers'],
            link: 'github.com/rodriguez2508/GeoApp'
        },
        {
            title: 'Backend-StaticFiles – Servidor de Archivos Estáticos',
            description: 'Aplicación backend con NestJS que sirve archivos estáticos del frontend, simplificando el despliegue y la gestión de proyectos monolíticos.',
            technologies: ['NestJS'],
            link: 'github.com/rodriguez2508/Backend-StaticFiles'
        },
        {
            title: 'AngularUnitTest – Pruebas Unitarias',
            description: 'Proyecto de demostración en Angular con Jasmine y Karma, logrando una cobertura de código del 90% para garantizar la estabilidad en producción.',
            technologies: ['Angular', 'Jasmine', 'Karma'],
            link: 'github.com/rodriguez2508/angular-unit-test'
        }
    ] as Project[],
    skills: {
        languages: ['TypeScript', 'JavaScript', 'SQL'],
        frameworks: ['Angular (NgRx, SignalStore)', 'NestJS', 'Node.js', 'TypeORM', 'Socket.IO', 'OpenLayers', 'Capacitor'],
        databases: ['PostgreSQL', 'MongoDB'],
        testing: ['Jasmine', 'Karma', 'Playwright'],
        tools: ['Git', 'GitHub', 'VS Code', 'Docker', 'PWAs']
    }
};