import { ChatStep } from 'app/interfaces/chat-bot.interface';

export const geoAppFlow: ChatStep = {
  id: 'geo_app',
  message: 'Puedo ayudarte a desarrollar una aplicación con geolocalización utilizando tecnologías como OpenLayers y Angular. ¿Qué más necesitas?',
  options: [
    { label: 'Volver al inicio', nextId: 'start' },
  ],
};