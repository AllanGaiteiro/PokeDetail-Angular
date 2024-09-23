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
  abilities!: {
    name: string;
    url: string;
  }[];

  constructor(data: PokemonData) {
    this.id = data.id;
    this.name = data.name;
    this.height = data.height;
    this.weight = data.weight;
    this.types = data?.types?.map(({ type }) => type.name) || [];
    this.stats = data?.stats?.map(({ stat, base_stat }) => ({ name: stat.name, baseStat: base_stat })) || [];
    this.abilities = data?.moves?.map(({ move }) => ({ ...move })) || [];
  }
}

export enum PokemonType {
  'grass' = 'grass',
  'poison' = 'poison',
  'fire' = 'fire',
  'water' = 'water',
  'normal' = 'normal',
  'electric' = 'electric',
  'fairy' = 'fairy',
  'psychic' = 'psychic',
  'fighting' = 'fighting',
  'steel' = 'steel',
  'rock' = 'rock',
  'ground' = 'ground',
  'ghost' = 'ghost',
  'flying' = 'flying',
  'ice' = 'ice',
  'dragon' = 'dragon',
  'dark' = 'dark',
}