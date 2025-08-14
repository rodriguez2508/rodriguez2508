import { ChatStep } from 'app/interfaces/chat-bot.interface';

export const skillsBackendFlow: ChatStep = {
  id: 'skills_backend',
  message: `<p>Mis <strong>habilidades en Backend</strong> incluyen:</p>
<p><strong>Desarrollo de APIs:</strong></p>
<ul>
  <li>Creación de APIs RESTful y GraphQL utilizando NestJS y Node.js.</li>
  <li>Implementación de autenticación y autorización (JWT, OAuth2, Google Auth).</li>
</ul>
<p><strong>Comunicación en Tiempo Real:</strong></p>
<ul>
  <li>Uso de WebSockets para aplicaciones que requieren actualizaciones en tiempo real.</li>
</ul>
<p><strong>Web Scraping:</strong></p>
<ul>
  <li>Extracción y procesamiento de datos de sitios web utilizando herramientas como Puppeteer y Cheerio.</li>
</ul>
<p><strong>Manejo de Colas y Tareas Asíncronas:</strong></p>
<ul>
  <li>Implementación de colas de tareas con BullMQ y Redis para mejorar la escalabilidad y el rendimiento.</li>
</ul>
<p><strong>Bases de Datos:</strong></p>
<ul>
  <li>Diseño y optimización de bases de datos relacionales (PostgreSQL) y NoSQL (MongoDB).</li>
</ul>
<p>¿Te gustaría saber más sobre alguna de estas habilidades?</p>`,
  options: [
    {
      label: 'Desarrollo de APIs',
      nextId: 'skills_apis',
      keywords: ['apis', 'restful', 'graphql', 'nestjs', 'node.js']
    },
    {
      label: 'Comunicación en Tiempo Real',
      nextId: 'skills_websockets',
      keywords: ['websockets', 'tiempo real', 'comunicación']
    },
    {
      label: 'Web Scraping',
      nextId: 'skills_scraping',
      keywords: ['scraping', 'puppeteer', 'cheerio', 'extracción de datos']
    },
    {
      label: 'Manejo de Colas y Tareas Asíncronas',
      nextId: 'skills_queues',
      keywords: ['colas', 'bullmq', 'redis', 'tareas asíncronas']
    },
    {
      label: 'Bases de Datos',
      nextId: 'skills_databases',
      keywords: ['bases de datos', 'postgresql', 'mongodb', 'optimización']
    },
    {
      label: 'Volver a habilidades',
      nextId: 'skills',
      keywords: ['habilidades', 'volver']
    },
  ],
};