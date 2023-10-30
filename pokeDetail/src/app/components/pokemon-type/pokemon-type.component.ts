import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-type',
  templateUrl: './pokemon-type.component.html',
  styleUrls: ['./pokemon-type.component.css'],
})
export class PokemonTypeComponent {
  @Input() type?: string;

  capitalizeFirstLetter(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
}
