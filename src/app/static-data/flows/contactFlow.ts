import { ChatStep } from 'app/interfaces/chat-bot.interface';

export const contactFlow: ChatStep = {
  id: 'contact',
  message: `
    <p>Puedes contactarme en:</p>
    <ul>
      <li>📧 <strong>Email:</strong> <a href="mailto:rodriguezjeancarlosrodriguez@gmail.com" target="_blank">rodriguezjeancarlosrodriguez@gmail.com</a></li>
      <li>📞 <strong>WhatsApp:</strong> <a href="https://wa.me/5354410204" target="_blank">+53 54410204</a></li>
      <li>🔗 <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/jeancarlosrr" target="_blank">linkedin.com/in/jeancarlosrr</a></li>
      <li>🐙 <strong>GitHub:</strong> <a href="https://github.com/rodriguez2508" target="_blank">github.com/rodriguez2508</a></li>
    </ul>
    <p>¡Envíame un mensaje!</p>
  `,
  options: [
    { 
      label: 'Volver al inicio', 
      nextId: 'start', 
      keywords: ['inicio', 'volver'] 
    },
  ],
};