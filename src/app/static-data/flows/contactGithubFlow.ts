import { ChatStep } from 'app/interfaces/chat-bot.interface';

export const contactGithubFlow: ChatStep = {
  id: 'contact_github',
  message: `
    <p>¡Échale un vistazo a mis proyectos en GitHub! 🚀</p>
    <p>Puedes ver mi perfil en:</p>
    <ul>
      <li><a href="https://github.com/rodriguez2508" target="_blank">github.com/rodriguez2508</a></li>
    </ul>
    <p>¡No dudes en explorar mis repositorios!</p>
  `,
  options: [
    { 
      label: 'Volver al contacto', 
      nextId: 'contact', 
      keywords: ['contacto', 'volver'] 
    },
  ],
};