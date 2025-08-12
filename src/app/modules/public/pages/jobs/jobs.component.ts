import { CommonModule } from '@angular/common';
import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { CV_DATA } from '@static-data/cv-data';
import gsap from 'gsap';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
  imports: [
    CommonModule
  ]
})
export class JobsComponent implements OnInit, AfterViewInit {


  data = CV_DATA; // Asigna los datos personales a una propiedad

  active = 0

  constructor(private elementRef: ElementRef) { }
  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.initAnimations();
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
    const title = jobsSection.querySelector('.title');
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

    // Observar las tarjetas
    // const cards = jobsSection.querySelectorAll('.card');
    // cards.forEach((card: HTMLElement, index: number) => {
    //   this.observeElement(card, () => {
    //     gsap.from(card, {
    //       duration: 1,
    //       y: 50,
    //       opacity: 0,
    //       // delay: index * 0.3, // Retraso entre cada tarjeta
    //       ease: 'power2.out'
    //     });
    //   });
    // });
  }

  private observeElement(element: HTMLElement, callback: () => void): void {
    let isAnimating = false; // Flag para controlar la animación

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isAnimating) {
          isAnimating = true; // Marcar que la animación está en progreso
          callback(); // Ejecutar la animación cuando el elemento es visible

          // Restablecer el flag después de que la animación termine
          setTimeout(() => {
            isAnimating = false;
          }, 500); // Duración de la animación en milisegundos
        }
      });
    }, { threshold: 0.8 }); // Umbral de visibilidad (50%)

    observer.observe(element); // Comenzar a observar el elemento
  }
}