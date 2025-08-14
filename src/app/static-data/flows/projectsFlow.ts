import { ChatStep } from 'app/interfaces/chat-bot.interface';

export const projectsFlow: ChatStep = {
  id: 'projects',
  message: `
    <p>Aquí tienes algunos de mis <strong>proyectos destacados</strong>:</p>
    <ul>
       <li><strong>Linki</strong> – Red Social para Transporte</li>
      <li><strong>CRM</strong> con Bot de WhatsApp</li>
      <li><strong>GeoApp</strong> – Mapa Interactivo</li>
      <li><strong>Migración y Modernización de Angular</strong> – Actualización de Angular 16 a Angular 19</li>
      <li><strong>Backend-StaticFiles</strong> – Servidor de Archivos Estáticos</li>
      <li><strong>AngularUnitTest</strong> – Pruebas Unitarias en Angular</li>
      <li><strong>Anonimato Flask</strong> – Navegación y Control de Identidad Tor en Linux</li>
    </ul>
    <p>¿Cuál te gustaría conocer más?</p>
  `,
  options: [
    { 
      label: 'Linki – Red Social para Transporte', 
      nextId: 'project_linki', 
      keywords: ['linki', 'transporte', 'red social'] 
    },
    { 
      label: 'CRM con Bot de WhatsApp', 
      nextId: 'project_crm', 
      keywords: ['crm', 'whatsapp', 'automatización'] 
    },
    { 
      label: 'GeoApp – Mapa Interactivo', 
      nextId: 'project_geoapp', 
      keywords: ['geoapp', 'mapas', 'geolocalización'] 
    },
    { 
      label: 'Volver al inicio', 
      nextId: 'start', 
      keywords: ['inicio', 'volver'] 
    },
  ],
};