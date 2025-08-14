import { ChatStep } from 'app/interfaces/chat-bot.interface';

export const contactEmailFlow: ChatStep = {
    id: 'contact_email',
    message: `
    <p>¡Envíame un correo electrónico! 📧</p>
    <p>Puedes contactarme en:</p>
    <ul>
      <li><a href="mailto:rodriguezjeancarlosrodriguez@gmail.com" target="_blank">rodriguezjeancarlosrodriguez@gmail.com</a></li>
    </ul>
    <p>¡Estaré encantado de responder!</p>
  `,
    options: [
        {
            label: 'Volver al contacto',
            nextId: 'contact',
            keywords: ['contacto', 'volver']
        },
    ],
};