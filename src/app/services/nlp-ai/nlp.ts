import { afterNextRender, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NlpService {
  private nlp: any;
  private modelLoaded: boolean = false;
  private greetings = [
    'hola', 'hi', 'buenos dias', 'buenas tardes', 'buenas noches', 'saludos', 'que tal',
    'hey', 'holi', 'saludo', 'buen dia', 'buena noche', 'qué tal', 'qué hay', 'cómo estás',
    'cómo andas', 'qué onda', 'qué más', 'qué hubo', 'buen día', 'buenas'];

  private questionWords = [
    'que', 'cual', 'como', 'cuando', 'donde', 'por que', 'quien',
    'cuanto', 'cuales', 'porque', 'para que', 'es', 'son', 'hay',
    'tiene', 'tienen', 'puede', 'puedo', 'debo', 'deberia', 'sabes',
    'existe', 'existen', 'funciona', 'sirve', 'hay alguna', 'hay algun',
    'cual es', 'como se', 'donde esta', 'por que no', 'a que hora',
    'en que', 'con que', 'para que', 'desde cuando', 'hasta cuando',
    'cuantos', 'cuantas', 'a quien', 'de quien', 'para quien'
  ];

  constructor() {
    afterNextRender(() => {

      this.loadModel();

    });
    
  }

  private async loadModel() {
    if (typeof window !== 'undefined') {
      try {
        const winkNLP = await import('wink-nlp');
        const model = await import('wink-eng-lite-web-model');
        this.nlp = winkNLP.default(model.default);
        this.modelLoaded = true;
      } catch (error) {
        console.error('Error loading NLP model:', error);
      }
    }
  }

  async tokenize(text: string): Promise<string[]> {
    if (!this.modelLoaded) {
      await this.loadModel();
    }
    try {
      const doc = this.nlp.readDoc(text);
      return doc.tokens().out();
    } catch {
      return text.split(' '); // Fallback: dividir por espacios si falla
    }
  }

  async lemmatize(text: string): Promise<string[]> {
    if (!this.modelLoaded) {
      await this.loadModel();
    }
    try {
      const doc = this.nlp.readDoc(text);
      return doc.tokens().out(this.nlp.its.lemma);
    } catch {
      return text.split(' '); // Fallback: devolver tokens si falla
    }
  }

  async analyzeSentiment(text: string): Promise<number> {
    if (!this.modelLoaded) {
      await this.loadModel();
    }
    try {
      const doc = this.nlp.readDoc(text);
      const sentiment = doc.out(this.nlp.its.sentiment);
      return sentiment || 0; // Devuelve 0 si no hay resultado
    } catch {
      return 0; // Fallback para errores
    }
  }

  async extractEntities(text: string): Promise<string[]> {
    if (!this.modelLoaded) {
      await this.loadModel();
    }
    try {
      const doc = this.nlp.readDoc(text);
      return doc.entities().out() || [];
    } catch {
      return []; // Fallback para errores
    }
  }

  async isGreeting(text: string): Promise<boolean> {
    const normalizedText = this.normalizeText(text);
    const tokens = await this.tokenize(text);
    const normalizedTokens = tokens.map(token => this.normalizeText(token));
    return normalizedTokens.some(token => this.greetings.includes(token));
  }

  isQuestion(text: string): boolean {
    const normalizedText = this.normalizeText(text);
    const tokens = normalizedText.split(' ');
    return normalizedText.includes('?') || tokens.some(token => this.questionWords.includes(token));
  }

  private normalizeText(text: string): string {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }
}