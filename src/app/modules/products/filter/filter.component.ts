import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  @Input() categories: string[] | null = [];
  @Input() selectedCategory: string = 'electronics';
  @Output() selectedCategoryChange = new EventEmitter<string>();
}
