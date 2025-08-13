import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

// import { AboutComponent } from './pages/about/about.component'; 
// import { JobsComponent } from './pages/jobs/jobs.component'; 
// import { HomeComponent } from './pages/home/home.component';
import { Header } from '@shared/header/header'; 
import { RouterOutlet } from '@angular/router';
import { ChatbotComponent } from '@shared/chatbot/chatbot';

@Component({
  selector: 'app-layout',
  imports: [
    RouterOutlet,
    // HomeComponent,
    // AboutComponent,
    // JobsComponent,
    ChatbotComponent,
    Header, 
    MatCardModule

  ],
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout {

}
