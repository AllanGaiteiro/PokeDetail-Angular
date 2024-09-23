import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
  selector: 'app-page-view',
  templateUrl: './page-view.component.html',
  styleUrls: ['./page-view.component.css']
})
export class PageViewComponent implements OnInit {
  pokemonId?: string; 
  pokemon: Pokemon | null = null; 

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokedexService 
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.pokemonId = params.get('id') || undefined;

      if (this.pokemonId) {
        this.pokemonService.getPokemon(this.pokemonId).subscribe(pokemon => {
          this.pokemon = pokemon;
        });
      }
    });
  }

  getBackgroundColor() {
    const types = this.pokemon?.types;
    if (!types?.length) return {};
    const colors = types.map(type => `var(--${type}-color)`);
    if (colors.length === 2) {
      const gradient = `linear-gradient(135deg, ${colors[0]} 50%, ${colors[1]} 50%)`;
      return { background: gradient };
    }
      if (colors.length === 1) {
      return { background: colors[0] };
    }

    const step = 100 / colors.length;
    const gradient = `linear-gradient(135deg, ${colors.map((color, index) => `${color} ${index * step}%`).join(', ')})`;
    return { background: gradient };
  }
}
