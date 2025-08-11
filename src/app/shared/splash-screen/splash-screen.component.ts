import { Component, ElementRef, ViewChild, OnInit, OnDestroy, Output, EventEmitter, afterNextRender } from '@angular/core';
import lottie from 'lottie-web';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss'],
})
export class SplashScreenComponent implements OnInit, OnDestroy {
  @ViewChild('lottieContainer', { static: true }) lottieContainer!: ElementRef;
  @Output() animationCompleted = new EventEmitter<void>();

  isHidden = false;
  private lottieAnimation: any;
  private minimumLoadingTime = 1800; // Tiempo mínimo en milisegundos
  private splashTimeout?: number;

  constructor() {
    afterNextRender(() => {
      this.initLottieAnimation();
      this.startSplashTimer();
    });
  }

  ngOnInit(): void {}

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

      this.lottieAnimation.addEventListener('error', (error: any) => {
        console.warn('Lottie animation error:', error);
      });
    } catch (error) {
      console.warn('Error initializing Lottie animation:', error);
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
      }, 2000); // Fallback después de 2 segundos adicionales
    }
  }

  private hideSplashScreen(): void {
    if (this.isHidden) return; // Evitar múltiples llamadas

    this.isHidden = true;

    // Emitir evento después de que la animación de salida termine
    setTimeout(() => {
      this.animationCompleted.emit();
    }, 800); // Coincide con la duración de la transición CSS
  }
}