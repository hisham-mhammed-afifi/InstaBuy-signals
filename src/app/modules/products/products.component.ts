import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';
import { ProductBackendService } from './services/product-backend.service';

import { SearchComponent } from './search/search.component';
import { FilterComponent } from './filter/filter.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    AsyncPipe,
    JsonPipe,
    SearchComponent,
    FilterComponent,
    ProductCardComponent,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  products = this.productsService.getAllProducts();
  categories = this.productsService.getAllCategories();

  selectedCategory = 'all';

  constructor(
    private productsBackend: ProductBackendService,
    private productsService: ProductService
  ) {}

  ngOnInit(): void {}

  displayRating(rating: number): {
    stars: number;
    hasHalfStar: boolean;
  } {
    // Round to nearest half star
    const roundedRating = Math.round(rating * 2) / 2;

    // Get the number of full stars
    const fullStars = Math.floor(roundedRating);

    // Check for half star
    const hasHalfStar = roundedRating !== fullStars;

    return {
      stars: fullStars,
      hasHalfStar,
    };
  }
}
