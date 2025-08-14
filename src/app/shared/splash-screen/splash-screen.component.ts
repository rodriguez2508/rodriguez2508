import { Component, ElementRef, ViewChild, OnInit, OnDestroy, Output, EventEmitter, afterNextRender, Injector, inject, runInInjectionContext, output } from '@angular/core';
import lottie from 'lottie-web';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss'],
})
export class SplashScreenComponent implements OnInit, OnDestroy {

  private injector = inject(Injector);

  @ViewChild('lottieContainer', { static: true }) lottieContainer!: ElementRef;
  animationCompleted = output<void>();

  isHidden = false;
  private lottieAnimation: any;
  private minimumLoadingTime = 3800; // Tiempo mínimo en milisegundos
  private splashTimeout?: number;

  constructor() {

    afterNextRender(() => {
      this.initLottieAnimation();
    });

  }

  ngOnInit(): void {
    runInInjectionContext(this.injector, () => {
      afterNextRender(() => {
        this.startSplashTimer();
      });
    });


  }

  ngOnDestroy(): void {
    if (this.lottieAnimation) {
      this.lottieAnimation.destroy();
    }
    if (this.splashTimeout) {
      clearTimeout(this.splashTimeout);
    }
  }

  private initLottieAnimation(): void {
    try {
      this.lottieAnimation = lottie.loadAnimation({
        container: this.lottieContainer.nativeElement,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'assets/lotties/loader.json'
      });
  
      // Esperar a que la animación esté lista
      this.lottieAnimation.addEventListener('DOMLoaded', () => {
        console.log('Lottie animation loaded');
        this.checkIfReadyToHide(); // Continuar con el flujo de la aplicación
      });
  
      this.lottieAnimation.addEventListener('error', (error: any) => {
        console.warn('Lottie animation error:', error);
        this.checkIfReadyToHide(); // Continuar incluso si hay un error
      });
    } catch (error) {
      console.warn('Error initializing Lottie animation:', error);
      this.checkIfReadyToHide(); // Continuar incluso si hay un error
    }
  }

  private startSplashTimer(): void {
    this.splashTimeout = window.setTimeout(() => {
      this.checkIfReadyToHide();
    }, this.minimumLoadingTime);
  }

  private checkIfReadyToHide(): void {
    if (document.readyState === 'complete') {
      this.hideSplashScreen();
    } else {
      window.addEventListener('load', () => {
        this.hideSplashScreen();
      }, { once: true });

      setTimeout(() => {
        this.hideSplashScreen();
      }, 3000); // Fallback después de 2 segundos adicionales
    }
  }

  private hideSplashScreen(): void {
    if (this.isHidden) return; // Evitar múltiples llamadas

    // Detener la animación de Lottie
    if (this.lottieAnimation) {
      this.lottieAnimation.stop(); // O usar this.lottieAnimation.destroy() si no necesitas reutilizar la animación
    }

    this.isHidden = true;

    // Emitir evento después de que la animación de salida termine
    setTimeout(() => {
      this.animationCompleted.emit();
    }, 3800); // Coincide con la duración de la transición CSS
  }
}