import { ChatStep } from "app/interfaces/chat-bot.interface";

export const aboutMeFlow: ChatStep = {
  id: 'about_me',
  message: `
    <p> Soy <strong>Jean Carlos Rodriguez</strong>, FullStack Developer con más de <strong>3 años de experiencia</strong> en tecnologías como:</p>
    <ul>
      <li><strong>TypeScript</strong></li>
      <li><strong>Angular</strong></li>
      <li><strong>NestJS</strong></li>
    </ul>
    <p>Me especializo en:</p>
    <ul>
      <li>Desarrollo de <strong>PWAs</strong> (Aplicaciones Web Progresivas)</li>
      <li>Creación de <strong>APIs escalables</strong></li>
      <li>Uso de <strong>bases de datos modernas</strong></li>
      <li><strong>Testing profesional</strong> (Jasmine, Karma, Playwright)</li>
    </ul>
    <p>Graduado en <strong>Ingeniería en Ciencias Informáticas</strong> en 2024. ¿Qué más te gustaría saber?</p>
  `,
  options: [
    {
      label: 'Experiencia laboral',
      nextId: 'experience',
      keywords: ['trabajo', 'historial', 'experiencia', 'carrera', 'empleo', 'profesional']
    },
    {
      label: 'Proyectos clave',
      nextId: 'projects',
      keywords: ['proyectos', 'trabajos', 'portafolio', 'ejemplos', 'casos de estudio', 'desarrollos']
    },
    {
      label: 'Habilidades tecnicas',
      nextId: 'skills',
      keywords: ['skills', 'habilidades', 'tecnologías', 'lenguajes', 'frameworks', 'conocimientos']
    },
    {
      label: 'Contacto',
      nextId: 'contact',
      keywords: ['contactar', 'email', 'llamarte', 'llamada', 'mensaje', 'comunicación', 'redes sociales', 'linkedin', 'github']
    },
  ],
};