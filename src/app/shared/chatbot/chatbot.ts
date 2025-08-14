import { afterNextRender, Component, ElementRef, inject, Injector, Pipe, PipeTransform, runInInjectionContext, signal } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

import gsap from 'gsap';
import { ChatBot } from '@services/chat-bot/chat-bot';
import { MatButtonModule } from '@angular/material/button';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({ name: 'safeHtml', standalone: true })
export class SafeHtmlPipe implements PipeTransform {
  private sanitizer = inject(DomSanitizer);
  private injector = inject(Injector);

  transform(value: string): SafeHtml {
    if (!value) return '';

    runInInjectionContext(this.injector, () => {
      afterNextRender(() => {

        // Crear un contenedor temporal para manipular el HTML
        const div = document.createElement('div');
        div.innerHTML = value;

        // Agregar target="_blank" y rel="noopener noreferrer" a todos los enlaces
        div.querySelectorAll('a').forEach((a) => {
          a.setAttribute('target', '_blank');
          a.setAttribute('rel', 'noopener noreferrer');
        });
      });
    });

    return this.sanitizer.bypassSecurityTrustHtml(value);
  }
}

@Component({
  selector: 'app-chatbot',
  imports: [
    MatButtonModule,
    MatIcon,
    SafeHtmlPipe
  ],
  templateUrl: './chatbot.html',
  styleUrl: './chatbot.scss'
})
export class ChatbotComponent {

  private elementRef = inject(ElementRef);
  private chatbotService = inject(ChatBot);

  isChatOpen = signal(false);
  messages = this.chatbotService.messages;
  userMessage = this.chatbotService.userMessage;

  private typingTween?: gsap.core.Tween;

  constructor() {

    afterNextRender(() => {


      this.initAnimations();
      setTimeout(() => this.scrollChatToBottom(), 50);

    });

  }
  ngOnInit() {
  }

  ngAfterViewChecked() {
    this.handleTypingAnimation();

  }

  toggleChat() {
    this.isChatOpen.update(v => !v);
  }

  async sendMessage() {
    await this.chatbotService.sendUserMessage();
    setTimeout(() => this.scrollChatToBottom(), 100);
  }

  sendOptionMessage(optionText: string) {
    this.userMessage.set(optionText); // Establece el texto de la opción como mensaje del usuario
    this.sendMessage(); // Envía el mensaje
  }
  private handleTypingAnimation() {
    const typingMsg = this.messages().find(m => m.typing);
    if (!typingMsg) {
      if (this.typingTween) {
        this.typingTween.kill();
        this.typingTween = undefined;
      }
      return;
    }

    const el = this.getMsgEl(typingMsg.id);
    if (!el) return;
    el.classList.add('typing-msg');
    this.typingTween = gsap.to(el, {
      keyframes: [{ opacity: .4, duration: .3 }, { opacity: 1, duration: .3 }],
      repeat: -1, yoyo: true
    });

    setTimeout(() => this.scrollChatToBottom(), 50);

  }


  handleOptionClick(nextId: string) {
    this.chatbotService.handleOptionClick(nextId);

    setTimeout(() => this.scrollChatToBottom(), 50);

  }

  private getMsgEl(id: number): HTMLElement | null {
    const root = this.elementRef.nativeElement.querySelector('.chat-messages') as HTMLElement | null;
    return root?.querySelector(`[data-mid="${id}"]`) as HTMLElement | null;
  }

  private scrollChatToBottom() {
    const box = this.elementRef.nativeElement.querySelector('.chat-messages');
    if (box) {
      box.scrollTo({ top: box.scrollHeight, behavior: 'smooth' });
    }
  }

  private initAnimations(): void {
    const jobsSection = this.elementRef.nativeElement;
    const title = jobsSection.querySelector('.chatbot-window');
    if (title) {
      this.observeElement(title, () => {
        gsap.from(title, {
          duration: 1,
          y: 50,
          opacity: 0,
          ease: 'power2.out'
        });
      });
    }
  }

  private observeElement(element: HTMLElement, callback: () => void): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback();
          observer.unobserve(element);
        }
      });
    }, { threshold: 0.5 });
    observer.observe(element);
  }

  
}
