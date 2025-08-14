import { ChatStep } from 'app/interfaces/chat-bot.interface';

export const skillsFlow: ChatStep = {
  id: 'skills',
  message: `
    <p>Mis <strong>habilidades técnicas y blandas</strong> incluyen:</p>
    <p><strong>Técnicas:</strong></p>
    <ul>
      <li>TypeScript</li>
      <li>Angular (NgRx, SignalStore)</li>
      <li>NestJS</li>
      <li>Node.js</li>
      <li>PostgreSQL / MongoDB</li>
      <li>Docker</li>
      <li>Redis</li>
      <li>Testing (Jasmine, Karma, Playwright)</li>
    </ul>
    <p><strong>Blandas:</strong></p>
    <ul>
      <li>Liderazgo Técnico</li>
      <li>Resolución de Problemas</li>
      <li>Comunicación Efectiva</li>
    </ul>
    <p>¿Te gustaría saber más sobre alguna de estas habilidades?</p>
  `,
   options: [
    { label: 'Frontend', nextId: 'skills_frontend', keywords: ['frontend', 'angular'] },
    { label: 'Backend', nextId: 'skills_backend', keywords: ['backend', 'nestjs'] },
    { label: 'Volver', nextId: 'start' },
  ],
};