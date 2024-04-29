import { Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProductBackendService } from './product-backend.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private productsBackend: ProductBackendService) {}

  getAllProducts() {
    const products$ = this.productsBackend.getAllProducts();
    return toSignal(products$, { initialValue: [] });
  }
}
