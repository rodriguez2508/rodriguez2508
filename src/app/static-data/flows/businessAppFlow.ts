import { ChatStep } from "app/interfaces/chat-bot.interface";

export const businessAppFlow: ChatStep = {
    id: 'business_app',
    message: '¡Claro que puedo ayudarte! Como FullStack Developer, tengo experiencia en desarrollar aplicaciones personalizadas que se adaptan a las necesidades específicas de cada negocio. ¿Podrías darme más detalles sobre qué funcionalidades necesitas en tu aplicación?',
    options: [
      { 
        label: 'Necesito una aplicación móvil', 
        nextId: 'mobile_app', 
        keywords: ['móvil', 'app móvil', 'aplicación móvil'] 
      },
      { 
        label: 'Necesito una aplicación web', 
        nextId: 'web_app', 
        keywords: ['web', 'aplicación web', 'sitio web'] 
      },
      { 
        label: 'Necesito ambas (móvil y web)', 
        nextId: 'both_app', 
        keywords: ['ambas', 'móvil y web', 'aplicación completa'] 
      },
      { 
        label: 'Volver al inicio', 
        nextId: 'start' 
      },
    ],
  };
  