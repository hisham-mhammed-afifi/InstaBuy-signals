import { Component, model, input } from '@angular/core';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  categories = input.required<string[] | null>();
  selectedCategory = model.required<string>();
}
