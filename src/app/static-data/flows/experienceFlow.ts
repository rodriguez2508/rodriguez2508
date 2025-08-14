import { ChatStep } from "app/interfaces/chat-bot.interface";

export const experienceFlow: ChatStep = {
  id: 'experience',
  message: 'Como Freelance Full-Stack, desarrolle Linki (una PWA red social de transporte con Angular, NestJS, WebSockets y OpenLayers). Tambien migre apps de Angular 16 a 19, integre bots de WhatsApp en CRMs y aumente cobertura de tests al 80%. ¡Reduje incidentes en produccion en un 70%! ¿Detalles de algun proyecto?',
  options: [
    { label: 'Mas sobre Linki', nextId: 'project_linki', keywords: ['linki', 'transporte'] },
    { label: 'CRM con WhatsApp', nextId: 'project_crm', keywords: ['crm', 'whatsapp'] },
    { label: 'Volver al inicio', nextId: 'start' },
  ],
};