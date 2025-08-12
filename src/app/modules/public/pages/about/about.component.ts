import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import gsap from 'gsap';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],

})
export class AboutComponent implements OnInit, AfterViewInit {

  isImageModalOpen = false;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.initAnimations();
  }


  openImageModal(): void {
    this.isImageModalOpen = true;
    document.body.style.overflow = 'hidden'; // Prevenir scroll del body
  }

  closeImageModal(): void {
    this.isImageModalOpen = false;
    document.body.style.overflow = 'auto'; // Restaurar scroll del body
  }

  onModalBackdropClick(event: Event): void {
    if (event.target === event.currentTarget) {
      this.closeImageModal();
    }
  }

  onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.closeImageModal();
    }
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
