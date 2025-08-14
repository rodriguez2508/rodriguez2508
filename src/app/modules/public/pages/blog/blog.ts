import { afterNextRender, AfterViewInit, Component, ElementRef, inject, OnDestroy, OnInit } from '@angular/core';
import { CV_DATA } from '@static-data/cv-data';

@Component({
  selector: 'app-blog',
  imports: [],
  templateUrl: './blog.html',
  styleUrl: './blog.scss'
})
export class Blog implements OnInit, AfterViewInit, OnDestroy {


  /* 
  *
  * @INJECT
  *
  */
  private elementRef = inject(ElementRef);


  data = CV_DATA; // Asigna los datos personales a una propiedad
  constructor() {
    afterNextRender(() => {

      // Registrar el plugin
      gsap.registerPlugin(TextPlugin);

      this.initAnimations();
    });
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

     
  }
  ngOnDestroy(): void {
    
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
 
  }


  /**
   * Observes a given DOM element and executes a callback function when the element
   * becomes visible in the viewport. The observation stops after the callback is triggered.
   *
   * @param element - The DOM element to be observed for visibility.
   * @param callback - The function to be executed when the element is visible.
   */

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
