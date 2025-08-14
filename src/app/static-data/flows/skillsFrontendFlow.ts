import { ChatStep } from 'app/interfaces/chat-bot.interface';

export const skillsFrontendFlow: ChatStep = {
  id: 'skills_frontend',
  message: `<p>Mis <strong>habilidades en Frontend</strong> incluyen:</p>
<p><strong>Desarrollo de PWAs (Progressive Web Apps):</strong></p>
<ul>
  <li>Uso de Capacitor para convertir aplicaciones web en aplicaciones móviles (iOS y Android).</li>
  <li>Implementación de Service Workers para funcionalidades offline.</li>
</ul>
<p><strong>Animaciones y Efectos Visuales:</strong></p>
<ul>
  <li>Creación de animaciones fluidas y atractivas utilizando CSS3 y librerías como GSAP.</li>
</ul>
<p><strong>Mapas Interactivos:</strong></p>
<ul>
  <li>Integración de OpenLayers para la visualización y manipulación de mapas en tiempo real.</li>
</ul>
<p><strong>Frameworks y Librerías:</strong></p>
<ul>
  <li>Experiencia en Angular (NgRx, SignalStore) para la gestión de estado y desarrollo de aplicaciones escalables.</li>
</ul>
<p><strong>Diseño Responsivo:</strong></p>
<ul>
  <li>Creación de interfaces que se adaptan a diferentes dispositivos y tamaños de pantalla.</li>
</ul>
<p>¿Te gustaría saber más sobre alguna de estas habilidades?</p>`,
  options: [
    {
      label: 'PWAs con Capacitor',
      nextId: 'skills_pwa',
      keywords: ['pwa', 'capacitor', 'aplicaciones móviles', 'service workers']
    },
    {
      label: 'Animaciones y Efectos Visuales',
      nextId: 'skills_animations',
      keywords: ['animaciones', 'css3', 'gsap', 'efectos visuales']
    },
    {
      label: 'Mapas Interactivos',
      nextId: 'skills_maps',
      keywords: ['mapas', 'openlayers', 'geolocalización', 'mapas interactivos']
    },
    {
      label: 'Frameworks y Librerías',
      nextId: 'skills_frameworks',
      keywords: ['angular', 'ngrx', 'signalstore', 'frameworks']
    },
    {
      label: 'Diseño Responsivo',
      nextId: 'skills_responsive',
      keywords: ['diseño responsivo', 'responsive', 'adaptativo', 'interfaces']
    },
    {
      label: 'Volver a habilidades',
      nextId: 'skills',
      keywords: ['habilidades', 'volver']
    },
  ],
};