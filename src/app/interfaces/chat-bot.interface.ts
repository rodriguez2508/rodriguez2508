// app/interfaces/chat-bot.interface.ts
export interface ChatStep {
    id: string;
    message: string;
    options?: ChatOption[];
    dynamicOptions?: (context: { messages: Msg[] }) => ChatOption[]; // Nueva propiedad
    matchKeywords_?: string[], 
  }
  
  export interface ChatOption {
    label: string;
    nextId: string;
    keywords?: string[];
  }


  export interface Msg {
    id: number;
    from: 'bot' | 'user';
    text?: string;
    typing?: boolean;
    options?: { label: string; nextId: string; keywords?: string[] }[];
  }