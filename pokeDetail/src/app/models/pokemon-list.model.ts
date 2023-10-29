import { Pokemon } from "./pokemon.model";


export class PokemonList {
  count: number;
  results: Pokemon[]; // Um array de objetos Pokemon

  constructor(data: any) {
    this.count = data.count;
    this.results = data.results.map((result: any) => new Pokemon(result));
  }
}
