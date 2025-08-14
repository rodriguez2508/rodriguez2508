import { ChatStep } from "app/interfaces/chat-bot.interface";

export const mobileAppFlow: ChatStep = {
    id: 'mobile_app',
    message: 'Perfecto, puedo ayudarte a desarrollar una aplicación móvil. Utilizo tecnologías como Angular con Capacitor para crear aplicaciones multiplataforma (iOS y Android) que funcionan de manera eficiente. ¿Qué tipo de funcionalidades necesitas?',
    options: [
      { 
        label: 'Necesito una aplicación con geolocalización', 
        nextId: 'geo_app', 
        keywords: ['geolocalización', 'mapas', 'ubicación'] 
      },
      { 
        label: 'Necesito una aplicación con chat en tiempo real', 
        nextId: 'chat_app', 
        keywords: ['chat', 'mensajería', 'tiempo real'] 
      },
      { 
        label: 'Necesito una aplicación con integración de pagos', 
        nextId: 'payment_app', 
        keywords: ['pagos', 'transacciones', 'finanzas'] 
      },
      { 
        label: 'Volver al inicio', 
        nextId: 'start' 
      },
    ],
  };