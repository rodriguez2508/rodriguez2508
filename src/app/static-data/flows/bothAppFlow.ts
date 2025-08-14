import { ChatStep } from 'app/interfaces/chat-bot.interface';

export const bothAppFlow: ChatStep = {
  id: 'both_app',
  message: '¡Excelente! Puedo ayudarte a desarrollar una solución completa que incluya tanto una aplicación móvil como una web. Esto te permitirá llegar a más usuarios y ofrecer una experiencia consistente en todas las plataformas. ¿Qué tipo de funcionalidades necesitas?',
  options: [
    { 
      label: 'Necesito una aplicación con geolocalización y autenticación', 
      nextId: 'geo_auth_app', 
      keywords: ['geolocalización', 'autenticación', 'mapas', 'usuarios'] 
    },
    { 
      label: 'Necesito una aplicación con chat en tiempo real y gestión de inventario', 
      nextId: 'chat_inventory_app', 
      keywords: ['chat', 'inventario', 'mensajería', 'gestión'] 
    },
    { 
      label: 'Necesito una aplicación con integración de pagos y API externas', 
      nextId: 'payment_api_app', 
      keywords: ['pagos', 'API', 'transacciones', 'integración'] 
    },
    { 
      label: 'Volver al inicio', 
      nextId: 'start' 
    },
  ],
};