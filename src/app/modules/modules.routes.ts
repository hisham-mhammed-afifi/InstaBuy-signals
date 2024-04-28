import { Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ModulesComponent } from './modules.component';
import { ProductsComponent } from './products/products.component';

export const routes: Routes = [
  {
    path: '',
    component: ModulesComponent,
    children: [
      {
        path: 'products',
        component: ProductsComponent,
      },
      {
        path: 'cart',
        component: CartComponent,
      },
      {
        path: '',
        redirectTo: '/products',
        pathMatch: 'full',
      },
    ],
  },
];
