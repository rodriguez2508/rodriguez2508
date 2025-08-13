import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [


  {
    path: '',
    loadComponent: () =>
      import('./layout').then((m) => m.Layout),
    title: 'CV | Inicio',
    data: { animationsType: 'ALL' },
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/home/home.component').then((m) => m.HomeComponent),
        title: 'CV | Inicio',
        data: { animationsType: 'ALL' }
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./pages/contact/contact.component').then((m) => m.ContactComponent),
        title: 'CV | Contacto',
        data: { animationsType: 'ALL' }
      },
    ]
  },  
  { path: '**', redirectTo: '' } // Ruta comodín para redirigir a la página de inicio
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }