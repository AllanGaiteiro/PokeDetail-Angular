
import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
  selector: 'app-pokemon-evolution',
  templateUrl: './pokemon-evolution.component.html',
  styleUrls: ['./pokemon-evolution.component.css'],
})
export class PokemonEvolutionComponent {
  @Input() pokemonName!: string;
  evolutions: Pokemon[] = [];

  constructor(private pokemonService: PokedexService) { }

  ngOnInit() {
    this.pokemonService.getEvolutionChain(this.pokemonName).subscribe((data) => {
      this.evolutions = data
    });
  }

  getPokemonImageUrl(pokemonId: number): string {
    const id = this.getNumber(3, pokemonId)
    const url = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`
    return url;
  }

  getNumber(length: number, id: number): string {
    let idStr = id + '';

    while (idStr.length < length) {
      idStr = '0' + idStr;
    }
    return idStr;
  }
}
