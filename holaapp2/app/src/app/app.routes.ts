import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.page').then((m) => m.HomePage),

    children: [
      {
        path: 'ayuda',
        loadComponent: () =>
          import('./ayuda/ayuda.page').then((m) => m.AyudaPage),
      },
    ],
  },

  {
    path: 'acerca',
    loadComponent: () =>
      import('./acerca/acerca.page').then((m) => m.AcercaPage),
  },

  {
    path: 'contacto',
    loadComponent: () =>
      import('./contacto/contacto.page').then((m) => m.ContactoPage),
  },
];