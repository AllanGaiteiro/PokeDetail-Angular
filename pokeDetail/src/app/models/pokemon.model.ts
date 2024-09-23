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
  abilities?: PokemonAbilitiesData[];

  constructor(data: PokemonData) {
    console.log(data)
    this.id = data.id;
    this.name = data.name;
    this.height = data.height;
    this.weight = data.weight;
    this.types = data?.types?.map(({ type }) => type.name) || [];
    this.stats = data?.stats?.map(({ stat, base_stat }) => ({ name: stat.name, baseStat: base_stat })) || [];
    //this.abilities = [new PokemonAbilitiesData(PokemonType.normal, '')];
  }
}

export class PokemonAbilitiesData {
  ability!: {
    name: PokemonType;
    url: string;
  };

  constructor(name: PokemonType, url: string) {
    this.ability.name = name;
    this.ability.url = url;
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