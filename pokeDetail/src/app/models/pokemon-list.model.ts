import { PokemonData } from './pokemon-data.model';
import { Pokemon } from './pokemon.model';

export class PokemonList {
  count: number;
  next: string;
  pokemons: Pokemon[];

  constructor(data: PokemonList) {
    this.count = data.count;
    this.next = data.next;
    this.pokemons = data.pokemons || [];
  }
}
