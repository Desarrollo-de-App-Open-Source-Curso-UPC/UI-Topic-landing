import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  constructor(private router: Router) {}

  onStart(): void {
    // Aquí puedes añadir la lógica para el botón EMPEZAR
    // Por ejemplo, navegar a la página de registro
    this.router.navigate(['/registro']);
  }
}
