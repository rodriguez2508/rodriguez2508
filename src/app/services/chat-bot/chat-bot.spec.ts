// En chatbot.service.spec.ts
import { TestBed } from '@angular/core/testing';
import { ChatBot } from './chat-bot';
import { CHAT_FLOWS } from '@static-data/chat-context';

describe('ChatbotService', () => {
  let service: ChatBot;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatBot],
    });
    service = TestBed.inject(ChatBot);
  });

  it('should normalize text correctly (ignore accents and case)', () => {
    const input = 'HÓLÁ quién ERES';
    const expected = 'hola quien eres';
    // Usamos el método privado accediendo a él (puedes exponerlo para testing si prefieres)
    const normalized = (service as any).normalizeText(input);
    expect(normalized).toBe(expected);
  });

  it('should match normalized keywords', () => {
    service.currentStep.set(CHAT_FLOWS.find(s => s.id === 'start')!);
    service.userMessage.set('Hólá');
    service.sendUserMessage();
    expect(service.currentStep().id).toBe('greeting'); // Debería ir a greeting por keyword 'hola'
  });
});