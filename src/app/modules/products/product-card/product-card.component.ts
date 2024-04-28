import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, Input } from '@angular/core';
import { Product } from '../../models/Product';

import { RatingModule } from 'ngx-bootstrap/rating';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [FormsModule, CurrencyPipe, RatingModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input() product: Product = <Product>{};
}
