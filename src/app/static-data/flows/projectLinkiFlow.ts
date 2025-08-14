import { ChatStep } from 'app/interfaces/chat-bot.interface';

export const projectLinkiFlow: ChatStep = {
  id: 'project_linki',
  message: `
    <p><strong>Linki</strong> es una plataforma Full Stack desarrollada con Angular, NestJS y PostgreSQL que revoluciona la gestión del transporte personal. Aquí tienes más detalles:</p>
    <ul>
      <li><strong>Autenticación:</strong> Integra autenticación con <strong>Google OAuth</strong> y <strong>WhatsApp</strong>, permitiendo a los usuarios iniciar sesión de manera segura y flexible.</li>
      <li><strong>Roles y Permisos:</strong> Incluye un sistema de <strong>roles</strong> para gestionar permisos y un manejo complejo de estados utilizando <strong>Signals</strong> para garantizar una experiencia de usuario fluida y reactiva.</li>
      <li><strong>Mapas y Rutas:</strong> La gestión de mapas y rutas en tiempo real se realiza con <strong>OpenLayers</strong>, incluyendo cálculo de distancias geoespaciales entre puntos y optimización de rutas mediante <strong>Three.js</strong>.</li>
      <li><strong>Chat en Tiempo Real:</strong> Se implementó un sistema de chat en tiempo real con <strong>Socket.IO</strong> para facilitar la comunicación entre usuarios.</li>
      <li><strong>Almacenamiento de Datos:</strong> Se integró <strong>PostgreSQL</strong> para el almacenamiento de datos y se utilizaron colas en <strong>Redis</strong> con <strong>BullMQ</strong> para mejorar la escalabilidad.</li>
      <li><strong>Manejo de Archivos:</strong> Se añadió un sistema de manejo de archivos en la nube para almacenar y gestionar documentos e imágenes de manera eficiente.</li>
    </ul>
    <p>Este proyecto aumentó la interacción en un 40%. Puedes ver el proyecto en: <a href="https://geoloc-app.onrender.com" target="_blank">https://linki.runstart.app</a>.</p>
  `,
  options: [
    { label: 'Volver a proyectos', nextId: 'projects' },
    { label: 'Volver al inicio', nextId: 'start' },
  ],
};