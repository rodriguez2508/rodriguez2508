import { Routes } from '@angular/router';


export const routes: Routes = [

    {
        path: 'public',
        canActivate: [],
        loadChildren: () =>
          import('./modules/public/public-module').then((m) => m.PublicModule),
        title: 'CV | Public',
        data: { animationsType: 'ALL' }
    },
    {
        path: '',
        redirectTo: '/loading',
        pathMatch: 'full',
        title: 'CV | Loading',
        data: { animationsType: 'ALL' }
    },
    { path: '**', redirectTo: '/public/home' } // Redirige cualquier ruta no encontrada a 'home' 
];
