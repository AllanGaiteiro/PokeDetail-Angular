import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css'],
})
export class PokemonCardComponent {
  @Input() pokemon!: Pokemon;

  getNumber(length: number, id: number): string {
    let idStr = id + '';

    while (idStr.length < length) {
      idStr = '0' + idStr;
    }
    return idStr;
  }

  capitalizeFirstLetter(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }


}
