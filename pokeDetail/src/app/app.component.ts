import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokeDetail';
  constructor(private router: Router) {}
  goBack() {
    this.router.navigate(['/lista']); // Substitua pela rota real da lista de Pokémon
  }
}
