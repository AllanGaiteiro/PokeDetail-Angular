export interface PokemonData {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: {
    type: { name: string };
  }[];
  stats: {
    stat: { name: string };
    base_stat: number;
  }[];
  moves: {
    move: { name: string, url: string };
  }[];
}
