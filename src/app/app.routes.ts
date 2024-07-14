import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dialog-confirm-example',
    loadComponent: () =>
      import('./dialog-confirm-example/dialog-confirm-example.component').then(
        (m) => m.DialogConfirmExampleComponent,
      ),
  },
  {
    path: '**',
    redirectTo: 'dialog-confirm-example',
  },
];
