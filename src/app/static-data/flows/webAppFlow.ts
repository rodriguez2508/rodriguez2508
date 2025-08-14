import { ChatStep } from 'app/interfaces/chat-bot.interface';

export const webAppFlow: ChatStep = {
  id: 'web_app',
  message: 'Entendido, puedo ayudarte a desarrollar una aplicación web. Utilizo Angular para crear interfaces de usuario modernas y NestJS para el backend, lo que permite aplicaciones escalables y seguras. ¿Qué tipo de funcionalidades necesitas?',
  options: [
    { 
      label: 'Necesito una aplicación con autenticación de usuarios', 
      nextId: 'auth_app', 
      keywords: ['autenticación', 'usuarios', 'login'] 
    },
    { 
      label: 'Necesito una aplicación con gestión de inventario', 
      nextId: 'inventory_app', 
      keywords: ['inventario', 'gestión', 'stock'] 
    },
    { 
      label: 'Necesito una aplicación con integración de API externas', 
      nextId: 'api_app', 
      keywords: ['API', 'integración', 'externas'] 
    },
    { 
      label: 'Volver al inicio', 
      nextId: 'start' 
    },
  ],
};