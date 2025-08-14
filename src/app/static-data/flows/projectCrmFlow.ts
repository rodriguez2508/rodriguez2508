import { ChatStep } from 'app/interfaces/chat-bot.interface';

export const projectCrmFlow: ChatStep = {
  id: 'project_crm',
  message: 'CRM con integracion a WhatsApp bot, automatizo 60% de respuestas y redujo tiempo de atencion en 45%. Desarrollado con NestJS y Angular 19.',
  options: [
    { label: 'Otro proyecto', nextId: 'projects' },
  ],
};