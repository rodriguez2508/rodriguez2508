import { ChatStep } from 'app/interfaces/chat-bot.interface';

export const fallbackFlow: ChatStep = {
  id: 'fallback',
  message: `
    <p>¡Vaya! Parece que no tengo una respuesta específica para eso. 😅</p>
    <p>Aquí tienes algunas opciones que podrían ayudarte:</p>
    <ul>
      <li>¿Quieres saber más sobre mis <strong>habilidades técnicas</strong>?</li>
      <li>¿Te interesa conocer mis <strong>proyectos recientes</strong>?</li>
      <li>¿Necesitas ayuda para desarrollar una <strong>aplicación</strong>?</li>
    </ul>
    <p>¿Por dónde quieres continuar?</p>
  `,
  options: [
    { label: 'Mis habilidades', nextId: 'skills' },
    { label: 'Mis proyectos', nextId: 'projects' },
    { label: 'Desarrollo de aplicaciones', nextId: 'business_app' },
    { label: 'Volver al inicio', nextId: 'start' },
  ],
};