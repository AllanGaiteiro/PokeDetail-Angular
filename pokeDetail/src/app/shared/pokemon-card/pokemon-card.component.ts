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
