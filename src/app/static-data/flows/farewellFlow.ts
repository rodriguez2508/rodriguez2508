import { ChatStep } from 'app/interfaces/chat-bot.interface';

export const farewellFlow: ChatStep = {
  id: 'farewell',
  message: '¡Adios! Fue un placer charlar. Visita mi GitHub o LinkedIn para ms. 😊',
  options: [],
  matchKeywords_: ['adios', 'chau', 'bye', 'hasta luego']
};