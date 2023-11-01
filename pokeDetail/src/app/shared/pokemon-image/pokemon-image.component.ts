import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-pokemon-image',
  templateUrl: './pokemon-image.component.html',
  styleUrls: ['./pokemon-image.component.css'],
})
export class PokemonImageComponent {
  @Input() pokemonName?: string;
  @Input() pokemonId?: number;
  @Input() type: 'detail' | 'full' = 'detail';

  getNumber(length: number, id: number): string {
    let idStr = id + '';

    while (idStr.length < length) {
      idStr = '0' + idStr;
    }
    return idStr;
  }
}
