import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { Header } from '@shared/header/header'; 
import { RouterOutlet } from '@angular/router';
import { ChatbotComponent } from '@shared/chatbot/chatbot';

@Component({
  selector: 'app-layout',
  imports: [
    RouterOutlet,
    ChatbotComponent,
    Header, 
    MatCardModule

  ],
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout {

}
