import { afterNextRender, AfterViewInit, Component, ElementRef, inject, OnDestroy, OnInit } from '@angular/core';
import { CV_DATA } from '@static-data/cv-data';

import gsap from 'gsap';
import TextPlugin from 'gsap/TextPlugin';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects implements OnInit, AfterViewInit, OnDestroy {


  /* 
  *
  * @INJECT
  *
  */
  private elementRef = inject(ElementRef);


  data = CV_DATA; // Asigna los datos personales a una propiedad
  constructor() {
    afterNextRender(() => {
 
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
    const section = this.elementRef.nativeElement;

    const cards = section.querySelectorAll('.project-card');
    cards.forEach((card: HTMLElement, index: number) => {
      this.observeElement(card, () => {
        gsap.from(card, {
          duration: 0.8,
          y: 30,
          opacity: 0,
          delay: index * 0.1,
          ease: 'power2.out'
        });
      });
    });
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
          callback();
          observer.unobserve(element);
        }
      });
    }, { threshold: 0.2 });

    observer.observe(element);
  }

/**
 * Truncates the given description to a specified maximum length, appending
 * an ellipsis ("...") if the original description exceeds this length.
 *
 * @param description - The string to be truncated.
 * @param maxLength - The maximum allowed length for the description.
 * @returns The truncated string with an ellipsis if it was longer than the maxLength,
 *          otherwise returns the original string.
 */

  truncateDescription(description: string, maxLength: number): string {
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + '...';
    }
    return description;
  }
}
