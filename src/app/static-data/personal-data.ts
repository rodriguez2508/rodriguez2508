export const personalData = {
    name: 'Jean Carlos Rodríguez',
    profileImageUrl: './assets/images/profile.png', // Ruta a tu imagen de perfil
    bio: 'Ingeniero Informático Full-Stack con sólida experiencia en el desarrollo de aplicaciones web escalables y centradas en el usuario, utilizando un stack tecnológico moderno que incluye Angular, NestJS y PostgreSQL.',
    aboutMe: {
      description: 'Liderazgo comprobado en proyectos de desarrollo de software, desde la concepción hasta la implementación, como se demuestra en el lanzamiento de Linki, una innovadora red social cubana para transporte.'
    },
    projects: [
      {
        title: 'Linki - Red Social para Solicitar Transporte en Cuba',
        description: 'La primera red social cubana que conecta directamente a usuarios para solicitar transporte.',
        role: 'Co-creador, Gestión de Proyectos, Desarrollador Full-Stack',
        technologies: ['Angular', 'NestJS', 'TypeORM', 'OpenStreetMap (OSM)', 'OpenLayers (OL)', 'WebSocket', 'Socket.IO', 'Service Worker', 'PostgreSQL'],
        features: [
          'Interfaz de usuario intuitiva y eficiente desarrollada con Angular.',
          'Backend robusto y escalable implementado con NestJS y TypeORM.',
          'Integración de OpenLayers y OpenRouteService para funcionalidades de geolocalización y cálculo de rutas.',
          'Comunicación en tiempo real mediante WebSocket y Socket.IO.',
          'Autenticación con Google OAuth y acceso a Google Drive.',
          'Diseño y gestión de la base de datos con PostgreSQL.'
        ],
        link: 'https://linki-cuba.onrender.com'
      },
      {
        title: 'GeoApp - Proyecto para la implementación de un mapa en una aplicación web',
        description: 'Proyecto para la implementación de un mapa en una aplicación web.',
        role: 'Co-creador, Gestión de Proyectos, Desarrollador Frontend',
        technologies: ['Angular', 'OpenLayers', 'OpenRouteService'],
        features: [
          'Desarrollo frontend con Angular, creando una interfaz de usuario intuitiva y eficiente.',
          'Integración de OpenLayers y OpenRouteService para funcionalidades de geolocalización y cálculo de rutas.'
        ],
        link: 'https://github.com/rodriguez2508/GeoApp'
      }
    ],
    skills: {
      programmingLanguages: ['TypeScript', 'JavaScript', 'PHP', 'Python'],
      frameworksLibraries: ['Angular', 'Ionic', 'NestJS', 'Node.js', 'TypeORM', 'CodeIgniter', 'Flask'],
      databases: ['PostgreSQL', 'MongoDB']
    },
    contact: {
      email: 'rodriguezjeancarlosrodriguez@gmail.com',
      phone: '+5354410204',
      socialMedia: {
        linkedin: 'https://www.linkedin.com/in/jeancarlosrr',
        github: 'https://github.com/rodriguez2508',
      }
    }
  };