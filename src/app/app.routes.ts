import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./sample/sample.component').then((m) => m.SampleComponent),
  },
];
