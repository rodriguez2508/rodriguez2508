import { inject, Injectable, signal } from '@angular/core';
import { NlpService } from '@services/nlp-ai/nlp';
import { CHAT_FLOWS } from '@static-data/chat-context';
import { ChatStep, Msg } from 'app/interfaces/chat-bot.interface';
import stringSimilarity from 'string-similarity';

@Injectable({
  providedIn: 'root'
})
export class ChatBot {
  private nlpService = inject(NlpService);

  steps = CHAT_FLOWS;
  currentStep = signal<ChatStep>(this.steps.find(s => s.id === 'start') ?? { id: 'default', message: 'Mensaje por defecto' });
  messages = signal<Msg[]>([]);
  userMessage = signal('');
  conversationContext: string[] = [];

  private mid = 0;
  private typingMsgId: number | null = null;

  constructor() {
    this.initChat();
  }

  private initChat() {
    this.addMessage('bot', this.currentStep().message);
    this.addOptionsIfAny();
  }

  addMessage(from: 'bot' | 'user', text?: string, typing = false): number {
    const id = ++this.mid;
    this.messages.update(arr => [...arr, { id, from, text, typing }]);
    return id;
  }

  removeMessage(id: number) {
    this.messages.update(arr => arr.filter(m => m.id !== id));
  }

  async sendUserMessage() {
    const text = this.userMessage().trim();
    if (!text) return;

    try {
      // Agregar el mensaje del usuario
      this.addMessage('user', text);

      // Detectar si el mensaje es un saludo
      if (await this.nlpService.isGreeting(text)) {
        this.addMessage('bot', '¡Hola! ¿En qué puedo ayudarte hoy?');
        this.userMessage.set(''); // Limpiar el input antes del return
        return;
      }else {
        
        // Tokenizar y lematizar el texto del usuario
        const tokens = await this.nlpService.tokenize(text);
        const lemmas = await this.nlpService.lemmatize(text);

        // Analizar el sentimiento del texto
        const sentiment = await this.nlpService.analyzeSentiment(text);
        console.log('Sentiment:', sentiment);

        // Extraer entidades del texto
        const entities = await this.nlpService.extractEntities(text);
        console.log('Entities:', entities);

        // Usar tokens para mejorar la lógica del chatbot
        const normalizedTokens = tokens.map(token => this.normalizeText(token)).join(' ');
        const normalizedLemmas = lemmas.map(lemma => this.normalizeText(lemma)).join(' ');

        // Continuar con la lógica del chatbot
        const matched = this.findGlobalMatchingOption(normalizedLemmas);
        if (matched) {
          this.goToStep(matched.nextId);
        } else {
          // Intentar con tokens si no hay coincidencia con lemmas
          const matchedWithTokens = this.findGlobalMatchingOption(normalizedTokens);
          if (matchedWithTokens) {
            this.goToStep(matchedWithTokens.nextId);
          } else {
            this.goToStep('fallback');
          }
        }
      }

      this.userMessage.set(''); // Limpiar el input
    } catch (error) {
      console.error('Error processing message:', error);
      this.goToStep('fallback');
      this.userMessage.set(''); // Limpiar el input incluso en caso de error
    }
  }

  async goToStep(nextId: string): Promise<ChatStep | null> {
    const step = this.steps.find(s => s.id === nextId);
    if (!step) return null;

    this.currentStep.set(step);
    this.setContext(nextId);

    const isGreeting = nextId === 'start' || nextId === 'greeting' || step.message.toLowerCase().includes('hola');
    const botText = this.getRandomResponse(step.message, isGreeting);

    await this.botTypingAsync(botText, 900);
    this.addOptionsIfAny();

    return step;
  }

  private async botTypingAsync(finalText: string, delay = 800): Promise<void> {
    return new Promise(resolve => {
      this.typingMsgId = this.addMessage('bot', '💬 escribiendo...', true);
      setTimeout(() => {
        if (this.typingMsgId != null) {
          this.removeMessage(this.typingMsgId);
          this.typingMsgId = null;
        }
        this.addMessage('bot', finalText);
        resolve();
      }, delay);
    });
  }

  private findGlobalMatchingOption(userText: string): any {
    const normalizedUserText = this.normalizeText(userText);
    const matchingOptions = this.steps.flatMap(step => {
      let options = step.options || [];
      if (step.dynamicOptions) {
        options = step.dynamicOptions({ messages: this.messages() });
      }
      return options.filter(option => {
        const normalizedLabel = this.normalizeText(option.label);
        const labelMatch = normalizedLabel.includes(normalizedUserText);
        const keywordMatch = option.keywords?.some(k => normalizedUserText.includes(this.normalizeText(k)));
        return labelMatch || keywordMatch;
      });
    });

    if (matchingOptions.length === 0) {
      return this.findGlobalBestSimilarityMatch(normalizedUserText);
    }

    return matchingOptions[0];
  }

  private findGlobalBestSimilarityMatch(userText: string) {
    let bestMatch: { opt: any; similarity: number } = { opt: null, similarity: 0 };
    for (const step of this.steps) {
      let options = step.options || [];
      if (step.dynamicOptions) {
        options = step.dynamicOptions({ messages: this.messages() });
      }
      options.forEach(curr => {
        let similarity = stringSimilarity.compareTwoStrings(userText, this.normalizeText(curr.label));
        if (curr.keywords) {
          const keywordSim = Math.max(...curr.keywords.map(k => stringSimilarity.compareTwoStrings(userText, this.normalizeText(k))));
          similarity = Math.max(similarity, keywordSim);
        }
        if (similarity > bestMatch.similarity) {
          bestMatch = { opt: curr, similarity };
        }
      });
    }
    return bestMatch.similarity > 0.4 ? bestMatch.opt : null;
  }

  private tryContextFollowUp(contextId: string, userText: string): boolean {
    const ctxStep = this.steps.find(s => s.id === contextId);
    if (!ctxStep?.options) return false;
    const match = ctxStep.options.find(opt =>
      opt.keywords?.some(k => userText.includes(this.normalizeText(k)))
    );
    if (match) {
      this.goToStep(match.nextId);
      return true;
    }
    return false;
  }

  botTyping(finalText: string, delay = 800, onFinish?: () => void) {
    this.typingMsgId = this.addMessage('bot', '💬 escribiendo...', true);
    setTimeout(() => {
      if (this.typingMsgId != null) {
        this.removeMessage(this.typingMsgId);
        this.typingMsgId = null;
      }
      this.addMessage('bot', finalText);
      if (onFinish) onFinish();
    }, delay);
  }

  botTypingMultiple(messages: string[], delayBetween = 900, onFinish?: () => void) {
    const sendNext = (index: number) => {
      if (index >= messages.length) {
        if (onFinish) onFinish();
        return;
      }
      this.botTyping(messages[index], delayBetween, () => sendNext(index + 1));
    };
    sendNext(0);
  }

  private addOptionsIfAny() {
    const currentStep = this.currentStep();
    let options = currentStep.options || [];

    if (currentStep.dynamicOptions && typeof currentStep.dynamicOptions === 'function') {
      options = currentStep.dynamicOptions({ messages: this.messages() }) ?? [];
    }

    if (!options.length) return;

    // Crear el HTML para las opciones con estilos y funcionalidad de clic
    const optionsHtml = options.map(o => `<span class="option-text" (click)="sendOptionMessage('${o.label}')">${o.label}</span>`).join('');

    // Agregar un mensaje con las opciones como texto con fondo
    this.addMessage('bot', `<div class="options-container">${optionsHtml}</div>`);

    this.messages.update(arr => {
      const lastMsg = arr[arr.length - 1];
      lastMsg.options = options.map(o => ({ label: o.label, nextId: o.nextId, keywords: o.keywords }));
      return [...arr];
    });
  }

  private getRandomResponse(base: string, isGreeting: boolean = false) {
    const variations = isGreeting
      ? [
        base,
        `¡Hola! ${base}`,
        `¡Hey! ${base} 😊`,
        `¡Saludos! ${base}`,
      ]
      : [
        base,
        `Por supuesto, te cuento: ${base}`,
        `Interesante pregunta. ${base} 🚀`,
        `Basado en mi experiencia: ${base}`,
      ];
    return variations[Math.floor(Math.random() * variations.length)];
  }

  private setContext(intent: string) {
    this.conversationContext.push(intent);
  }

  private getLastContext() {
    return this.conversationContext[this.conversationContext.length - 1];
  }

  handleOptionClick(nextId: string) {
    this.goToStep(nextId);
  }

  private normalizeText(text: string): string {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }
}