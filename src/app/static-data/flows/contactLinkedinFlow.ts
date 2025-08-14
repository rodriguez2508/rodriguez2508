import { ChatStep } from 'app/interfaces/chat-bot.interface';

export const contactLinkedinFlow: ChatStep = {
    id: 'contact_linkedin',
    message: `
  <p>¡Conectemos en LinkedIn! 🚀</p>
  <p>Puedes visitar mi perfil en:</p>
  <ul>
    <li><a href="https://www.linkedin.com/in/jeancarlosrr" target="_blank">linkedin.com/in/jeancarlosrr</a></li>
  </ul>
  <p>¡No dudes en enviarme un mensaje!</p>
`,
    options: [
        {
            label: 'Volver al contacto',
            nextId: 'contact',
            keywords: ['contacto', 'volver']
        },
    ],
};