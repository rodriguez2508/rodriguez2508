import { ChatStep } from "app/interfaces/chat-bot.interface";

export const startFlow: ChatStep = {
  id: 'start',
  message: `
    <p>👋 <strong>Hola!</strong> Bienvenido al portafolio de <strong>Jean Carlos Rodriguez</strong>, FullStack Developer.</p>
    <p>Puedo ayudarte con varias cosas, por ejemplo:</p>
    <ul>
      <li>🧑‍💻 Conocer mi experiencia profesional</li>
      <li>📂 Explorar mis proyectos recientes</li>
      <li>⚙️ Ver mis habilidades técnicas</li>
      <li>✉️ Contactarme</li>
    </ul>
    <p>¿Por dónde quieres empezar?</p>
  `,
  dynamicOptions: () => {
    const hour = new Date().getHours();
    const timeOfDay = hour < 12 ? 'morning' : hour < 18 ? 'afternoon' : 'night';
    const greeting = {
      morning: '¡Buenos días! ☀️',
      afternoon: '¡Buenas tardes! 🌞',
      night: '¡Buenas noches! 🌙',
    }[timeOfDay];

    return [
      { 
        label: `${greeting} ¿Quién eres?`, 
        nextId: 'about_me', 
        keywords: ['hola', 'buenos dias', 'buenas tardes', 'buenas noches', 'saludo', 'quien eres', 'presentacion', 'sobre ti', 'quien es jean carlos'] 
      },
      { 
        label: 'Conoce mi experiencia', 
        nextId: 'experience', 
        keywords: ['experiencia', 'trabajo', 'historial', 'cv'] 
      },
      { 
        label: timeOfDay === 'morning' ? 'Proyectos para inspirarte hoy' : 'Mira mis proyectos recientes', 
        nextId: 'projects', 
        keywords: ['proyectos', 'trabajos', 'ejemplos', 'portafolio', 'que proyectos tienes', 'proyectos recientes', 'mis proyectos', 'proyectos tuyos'] 
      },
      { 
        label: 'Mis habilidades técnicas', 
        nextId: 'skills', 
        keywords: ['habilidades', 'skills', 'tecnologias', 'lenguajes'] 
      },
      { 
        label: timeOfDay === 'night' ? 'Contáctame mañana' : 'Contáctame ahora', 
        nextId: 'contact', 
        keywords: ['contacto', 'email', 'linkedin', 'github', 'como contactarte'] 
      },
      { 
        label: 'Saludo personalizado', 
        nextId: 'greeting', 
        keywords: ['saludo', 'hola', 'buenos dias', 'buenas tardes', 'buenas noches'] 
      },
    ];
  },
};