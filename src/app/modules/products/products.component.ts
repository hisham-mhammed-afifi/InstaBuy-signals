import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';
import { ProductBackendService } from './services/product-backend.service';

import { SearchComponent } from './search/search.component';
import { FilterComponent } from './filter/filter.component';
import { ProductCardComponent } from './product-card/product-card.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [AsyncPipe, SearchComponent, FilterComponent, ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  products$!: Observable<Product[]>;
  categories$!: Observable<string[]>;

  selectedCategory = 'all';

  constructor(private productsBackend: ProductBackendService) {}

  ngOnInit(): void {
    this.products$ = this.productsBackend.getAllProducts();
    this.categories$ = this.productsBackend.getAllCategories();
  }

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
