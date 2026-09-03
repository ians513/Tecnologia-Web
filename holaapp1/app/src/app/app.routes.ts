import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'acerca',
    loadComponent: () => import('./acerca/acerca.page').then( m => m.AcercaPage)
  },
  {
    path: 'contacto',
    loadComponent: () => import('./contacto/contacto.page').then( m => m.ContactoPage)
  },
];
