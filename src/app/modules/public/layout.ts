import { Component } from '@angular/core';
import { BannerComponent } from './pages/banner/banner.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { MoreProyectsComponent } from './pages/more-proyects/more-proyects.component';
import { ProyectsComponent } from './pages/proyects/proyects.component';
import { HomeComponent } from './pages/home/home.component';
import { Header } from '@shared/header/header';
import { Footer } from '@shared/footer/footer';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-layout',
  imports: [
    HomeComponent,
    BannerComponent,
    AboutComponent,
    JobsComponent,
    ProyectsComponent,
    MoreProyectsComponent,
    ContactComponent,
    Header,
    Footer,
    MatCardModule

  ],
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout {

}
