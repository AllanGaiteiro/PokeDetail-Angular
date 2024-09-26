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
    if (colors.length === 1) {
      const gradient = `linear-gradient(60deg, ${'white'} 50%, ${colors[0]} 50%)`;
      return { background: gradient };
    }
    const gradient = `linear-gradient(60deg, ${colors[1]} 50%, ${colors[0]} 50%)`;
    return { background: gradient };
  }

}

