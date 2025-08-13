import { Component, inject, signal } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { CV_DATA } from '@static-data/cv-data';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
  imports:[
    RouterModule,
    MatIcon
  ]
})
export class Header {

  private router = inject(Router)
  cvData = CV_DATA;

  // Variables globales
  navy = 'var(--navy)';
  lightSlate = 'var(--light-slate)';

  s_isDropdownOpen = signal(false); // Estado del menú desplegable usando Signal

  constructor() {
    // Inicialización del componente
  }

    // Verificar si la pantalla es móvil o md
  isMobileOrMd(): boolean {
    return window.innerWidth <= 991.98;
  }

  // Alternar la visibilidad del menú desplegable
  toggleDropdown() {

    if(window && !this.isMobileOrMd()){
      return
    }
    
    this.s_isDropdownOpen.set(!this.s_isDropdownOpen());
    
  }

  navigateTo(route: string = ''): void {
    this.router.navigate([route], {});
  }
}
