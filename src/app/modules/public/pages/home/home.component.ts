import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';

import { CV_DATA } from '@static-data/cv-data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, AfterViewInit {

  data = CV_DATA; // Asigna los datos personales a una propiedad


  constructor(
    private elementRef: ElementRef
  ) { }

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
}
