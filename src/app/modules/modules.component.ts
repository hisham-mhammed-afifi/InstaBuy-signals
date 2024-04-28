import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-modules',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './modules.component.html',
  styleUrl: './modules.component.scss',
})
export class ModulesComponent {
  navbarOpened = false;

  navItems = [
    {
      path: '/products',
      label: 'Products',
    },
  ];
}
