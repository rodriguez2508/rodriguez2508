import { ChatStep } from 'app/interfaces/chat-bot.interface';

export const projectGeoAppFlow: ChatStep = {
  id: 'project_geoapp',
  message: 'GeoApp: Frontend con Angular y OpenLayers para geolocalizacion en tiempo real. Repo: github.com/rodriguez2508/GeoApp.',
  options: [
    { label: 'Otro proyecto', nextId: 'projects' },
  ],
};