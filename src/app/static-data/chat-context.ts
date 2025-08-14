import { ChatStep } from 'app/interfaces/chat-bot.interface';
import { startFlow } from './flows/startFlow';
import { aboutMeFlow } from './flows/aboutMeFlow';
import { businessAppFlow } from './flows/businessAppFlow';
import { mobileAppFlow } from './flows/mobileAppFlow';
import { projectLinkiFlow } from './flows/projectLinkiFlow';
import { projectCrmFlow } from './flows/projectCrmFlow';
import { projectGeoAppFlow } from './flows/projectGeoAppFlow';
import { skillsFlow } from './flows/skillsFlow';
import { skillsFrontendFlow } from './flows/skillsFrontendFlow';
import { skillsBackendFlow } from './flows/skillsBackendFlow';
import { contactFlow } from './flows/contactFlow';
import { fallbackFlow } from './flows/fallbackFlow';
import { farewellFlow } from './flows/farewellFlow';
import { webAppFlow } from './flows/webAppFlow';
import { bothAppFlow } from './flows/bothAppFlow';
import { greetingFlow } from './flows/greetingFlow';
import { contactEmailFlow } from './flows/contactEmailFlow';
import { contactGithubFlow } from './flows/contactGithubFlow';
import { contactLinkedinFlow } from './flows/contactLinkedinFlow';
import { projectsFlow } from './flows/projectsFlow';

export const CHAT_FLOWS: ChatStep[] = [
  // Flujo inicial, da la bienvenida y ofrece opciones principales.
  startFlow,

  // Flujo de bienvenida.
  greetingFlow,

  // Flujo que proporciona información sobre Jean Carlos Rodriguez.
  aboutMeFlow,

  // Flujo para ayudar a los usuarios a desarrollar aplicaciones para sus negocios.
  businessAppFlow,

  // Flujo específico para aplicaciones móviles.
  mobileAppFlow,

  // Flujo que detalla el proyectos
  projectsFlow,
  projectLinkiFlow,
  projectGeoAppFlow,
  projectCrmFlow,



  // Flujo que describe las habilidades técnicas y blandas de Jean Carlos.
  skillsFlow,
  skillsFrontendFlow,
  skillsBackendFlow,

  // Flujo que proporciona información de contacto.
  contactFlow,
  contactEmailFlow,
  contactGithubFlow,
  contactLinkedinFlow,

  // Flujo de respaldo cuando el chatbot no entiende la entrada del usuario.
  fallbackFlow,

  // Flujo de despedida cuando el usuario termina la conversación.
  farewellFlow,

  // Flujo específico para aplicaciones web.
  webAppFlow,

  // Flujo para aplicaciones que incluyen tanto móvil como web.
  bothAppFlow,
];