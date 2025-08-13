import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-chatbot',
  imports: [
    MatIcon
  ],
  templateUrl: './chatbot.html',
  styleUrl: './chatbot.scss'
})
export class ChatbotComponent {
  isChatOpen = false; // Controla si la ventana del chatbot está abierta
  userMessage = ''; // Almacena el mensaje del usuario

  // Alternar la visibilidad del chatbot
  toggleChat() {
    this.isChatOpen = !this.isChatOpen;
  }

  // Enviar mensaje
  sendMessage() {
    if (this.userMessage.trim()) {
      const chatMessages = document.querySelector('.chat-messages');

      // Mostrar el mensaje del usuario
      const userMessage = document.createElement('div');
      userMessage.className = 'message user-message';
      userMessage.innerHTML = `<p><strong>Tú:</strong> ${this.userMessage}</p>`;
      chatMessages?.appendChild(userMessage);

      // Respuesta del chatbot
      const botMessage = document.createElement('div');
      botMessage.className = 'message bot-message';
      botMessage.innerHTML = `<p><strong>Chatbot:</strong> Gracias por tu mensaje. Te responderé pronto.</p>`;
      chatMessages?.appendChild(botMessage);

      // Limpiar el input
      this.userMessage = '';

      // Desplazar el chat hacia abajo
      chatMessages?.scrollTo(0, chatMessages.scrollHeight);
    }
  }
}