import { afterNextRender, Component, inject, Injector, OnDestroy, OnInit, runInInjectionContext, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { SplashScreenComponent } from '@shared/splash-screen/splash-screen.component';
import { Meta, Title } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { ParticlesService } from '@services/particles/particles.service';
import Lenis from 'lenis';
import { LoadingService } from '@services/loading/loading.service';

@Component({
  selector: 'app-root', 
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    SplashScreenComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  private injector = inject(Injector);

  title = 'Jean Carlos Rodríguez | Full-Stack Developer';
  appContentVisible = signal(false);
  private lenis!: Lenis;

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private location: Location,
    // private particlesService: ParticlesService,
    private loadingService: LoadingService
  ) {
    afterNextRender(() => {
     
      
    });
  }

  ngOnInit(): void {

    runInInjectionContext(this.injector, () => {
      afterNextRender(() => {
        // inicializar partículas después de un breve delay
        // this.particlesService.init();

         this.initLenis();
      });
    });

    // Configurar título y meta tags
    this.titleService.setTitle(this.title);
    this.metaService.addTags([
      { name: 'keywords', content: 'Full-Stack Developer, Angular, NestJS, PostgreSQL, TypeScript, JavaScript, Web Development' },
      { name: 'description', content: 'Ingeniero Informático Full-Stack con sólida experiencia en aplicaciones web escalables y centradas en el usuario.' },
      { name: 'author', content: 'Jean Carlos Rodríguez' },
      { property: 'og:title', content: this.title },
      { property: 'og:description', content: 'Ingeniero Informático Full-Stack con sólida experiencia en el desarrollo de aplicaciones web.' },
      { property: 'og:image', content: 'https://portfolio.onrender.com/assets/images/profile.png' },
      { property: 'og:url', content: 'https://portfolio.onrender.com/' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:title', content: this.title },
      { property: 'twitter:description', content: 'Ingeniero Informático Full-Stack con sólida experiencia en el desarrollo de aplicaciones web.' },
      { property: 'twitter:image', content: 'https://portfolio.onrender.com/assets/images/profile.png' }
    ]);
  }

  private initLenis(): void {
    this.lenis = new Lenis({
      duration: 1.2,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      gestureOrientation: 'vertical',
      smoothWheel: false, // Deshabilita el scroll suave con la rueda del ratón
      syncTouch: false
    });

    const raf = (time: number) => {
      this.lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }

  ngOnDestroy(): void {
    if (this.lenis) this.lenis.destroy();
  }

  onSplashAnimationCompleted(): void {
    this.appContentVisible.set(true);
    setTimeout(() => this.initLenis(), 100);
    this.loadingService.startAnimations();
  }
}
