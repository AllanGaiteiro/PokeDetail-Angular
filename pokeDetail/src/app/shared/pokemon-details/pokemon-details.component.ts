import { Component, Input, OnInit } from '@angular/core';
import { Pokemon, PokemonType } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css'],
})
export class PokemonDetailsComponent implements OnInit {
  @Input() pokemon?: Pokemon;
  backgroundColor: string | undefined;
  type: string | undefined;
  ngOnInit(): void {
    this.type = this.pokemon?.types[0] || PokemonType.normal;
  }

  getAbilityBackgroundColor() {
    if (!this.type) return {};
    return {
      'background-color': `var(--${this.type}-color)`
    };
  }
}
