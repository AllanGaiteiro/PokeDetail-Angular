import { PokemonData } from "./pokemon-data.model";

export class Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: string[];
  stats?: {
    name: string;
    baseStat: number;
  }[];

  constructor(data: PokemonData) {
    this.id = data.id;
    this.name = data.name;
    this.height = data.height;
    this.weight = data.weight;
    this.types = data?.types?.map(({type}) => type.name) || [];
    this.stats = data?.stats?.map(({stat,base_stat}) => ({name:stat.name,baseStat:base_stat})) || [];
  }
}
