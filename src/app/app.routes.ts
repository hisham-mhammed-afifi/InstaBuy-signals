import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: '',
    loadChildren: () =>
      import('./modules/modules.routes').then((m) => m.routes),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
