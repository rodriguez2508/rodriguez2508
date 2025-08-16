import { Component, OnInit, AfterViewInit, ElementRef, afterNextRender, OnDestroy, inject, ViewChild } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { ParticlesService } from '@services/particles/particles.service';
import { CV_DATA } from '@static-data/cv-data';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import gsap from 'gsap';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  imports: [
    ReactiveFormsModule
  ]
})
export class ContactComponent implements OnInit, AfterViewInit, OnDestroy {

  private particlesService = inject(ParticlesService);

  data = CV_DATA;

  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required)
  });
  
  @ViewChild('rocketFire') rocketFire!: ElementRef;


  constructor(private elementRef: ElementRef) {
    afterNextRender(() => {
      this.initAnimations();
    });
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.particlesService.init();
  }

  ngOnDestroy(): void {
    this.particlesService.destroy();
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Formulario enviado:', this.contactForm.value);
      // Aquí integra un servicio real, ej: EmailJS o tu API backend
      // Ejemplo: this.emailService.sendEmail(this.contactForm.value).subscribe();
      this.contactForm.reset(); // Reinicia el form después de enviar
       
    }
  }

  private initAnimations(): void {
    const contactSection = this.elementRef.nativeElement;

    // Animación para el título
    const title = contactSection.querySelector('.display-5');
    if (title) {
      this.observeElement(title, () => {
        gsap.from(title, { duration: 1, y: 50, opacity: 0, ease: 'power2.out' });
      });
    }

    // Animación para el formulario y botones
    const formElements = contactSection.querySelectorAll('form, .btn');
    formElements.forEach((el: HTMLElement, index: number) => {
      this.observeElement(el, () => {
        gsap.from(el, { duration: 1, y: 50, opacity: 0, delay: index * 0.2, ease: 'power2.out' });
      });
    });


    // Animación para el cohete
    if (this.rocketFire) {
      this.observeElement(this.rocketFire.nativeElement, () => {
        gsap.to(this.rocketFire.nativeElement, {
          duration: 1,
          opacity: 0,
          scale: 1.5,
          yoyo: true,
          repeat: -1,
          ease: "power1.inOut",
        });

        gsap.to(this.rocketFire.nativeElement, {
          duration: 3,
          y: -5,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
        });
      });
    }
  }

  private observeElement(element: HTMLElement, callback: () => void): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback();
          observer.unobserve(element);
        }
      });
    }, { threshold: 0.5 });

    observer.observe(element);
  }
}