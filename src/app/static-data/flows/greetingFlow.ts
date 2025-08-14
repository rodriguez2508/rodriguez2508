import { ChatStep } from "app/interfaces/chat-bot.interface";

export const greetingFlow: ChatStep = {
  id: 'greeting',
  message: '¡Hola! Me alegra que estes aqui. Soy el asistente de Jean Carlos, especializado en su portafolio.',
  dynamicOptions: ({ messages }) => {
    const hour = new Date().getHours();
    const timeOfDay = hour < 12 ? 'morning' : hour < 18 ? 'afternoon' : 'night';
    const greetingMessage = {
      morning: '¡Un gran dia para explorar mi trabajo en Angular y NestJS! 😊',
      afternoon: '¡Perfecto momento para revisar mis proyectos! 🚀',
      night: '¡Noche ideal para conocer mis habilidades! 🌟',
    }[timeOfDay];

    return [
      { label: `${greetingMessage} Sobre Jean Carlos`, nextId: 'about_me', keywords: ['quien eres', 'acerca', 'sobre jean carlos'] },
      { label: 'Ver sus proyectos', nextId: 'projects', keywords: ['proyectos', 'portafolio'] },
      { label: 'Explorar habilidades', nextId: 'skills', keywords: ['habilidades', 'skills'] },
      { label: 'Volver a opciones iniciales', nextId: 'start', keywords: ['inicio', 'volver'] },
    ];
  },
};