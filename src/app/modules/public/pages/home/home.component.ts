import { afterNextRender, AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, inject, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

import { CV_DATA } from '@static-data/cv-data';
import { ParticlesService } from '@services/particles/particles.service';




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {

  private particlesService = inject(ParticlesService);

  data = CV_DATA; // Asigna los datos personales a una propiedad


  constructor(
    private elementRef: ElementRef
  ) {
    afterNextRender(() => {

      // Registrar el plugin
      gsap.registerPlugin(TextPlugin);

      this.initAnimations();
    });
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

    this.particlesService.init(); // Inicializar las partículas
  }
  ngOnDestroy(): void {
    this.particlesService.destroy(); // Destruir las partículas al salir del componente
  }
  /**
   * Initializes animations for the "About" section by observing elements for visibility.
   * When the title becomes visible within the viewport, a GSAP animation is triggered
   * to bring it into view with a smooth transition. The implementation for card animations
   * is commented out, but can be enabled to animate cards similarly.
   */
  private initAnimations(): void {
    const jobsSection = this.elementRef.nativeElement;

    // Observar el título
    const title = jobsSection.querySelector('.sm-title');
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

    this.initTypewriterEffect();
  }

  private observeElement(element: HTMLElement, callback: () => void): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback(); // Ejecutar la animación cuando el elemento es visible
          observer.unobserve(element); // Dejar de observar después de la animación
        }
      });
    }, { threshold: 0.5 }); // Umbral de visibilidad (50%)

    observer.observe(element); // Comenzar a observar el elemento
  }

  private initTypewriterEffect(): void {
    const typewriterElement = this.elementRef.nativeElement.querySelector('.typewriter-gsap span');
    const text = 'Linki como Plataforma, no como Intermediario';
    const duration = 5; // Duración de la animación en segundos

    // Borra el texto inicial
    typewriterElement.textContent = '';

    // Escribe el texto letra por letra
    gsap.to(typewriterElement, {
      duration: duration,
      text: text,
      ease: 'none',
      onComplete: () => {
        // Borra el texto letra por letra
        gsap.to(typewriterElement, {
          duration: duration,
          text: '',
          ease: 'none',
          delay: 10, // Espera 1 segundo antes de borrar
          onComplete: () => {
            // Repite el ciclo
            this.initTypewriterEffect();
          }
        });
      }
    });
  }
}
