import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { PokemonData } from '../models/pokemon-data.model';
import { Pokemon, PokemonType } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root',
})
export class PokedexService {

  private baseUrl = 'https://pokeapi.co/api/v2/';
  constructor(private http: HttpClient) { }

  private getPokemonByUrl(url: string): Observable<Pokemon> {
    return this.http
      .get<PokemonData>(url)
      .pipe(map((data: PokemonData) => new Pokemon(data)));
  }

  getPokemonList(offset: number = 0, limit: number = 20): Observable<any> {
    const url = `${this.baseUrl}pokemon/?offset=${offset}&limit=${limit}`;
    return this.http.get(url).pipe(
      mergeMap((data: any) => {
        const pokemonUrls = data.results.map((result: any) => result.url);
        return forkJoin(
          pokemonUrls.map((url: string) => this.getPokemonByUrl(url))
        );
      })
    );
  }

  getPokemonAbilityType(url: any): Observable<PokemonType> {
    return this.http
      .get<{ type: { name: PokemonType } }>(url)
      .pipe(map((res) => res.type.name));
  }

  getPokemonVarieties(pokemonName: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/pokemon-species/${pokemonName}`).pipe(
      mergeMap((data: any) => {
        const pokemonUrls = data.varieties.map((result: any) => result.pokemon.url);
        return forkJoin(
          pokemonUrls.map((url: string) => this.getPokemonByUrl(url))
        );
      })
    );
  }

  getEvolutionChain(pokemonName: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/pokemon-species/${pokemonName}`).pipe(
      mergeMap((speciesData: any) => {
        const evolutionUrl = speciesData.evolution_chain.url;
        return this.getEvolutionChainByUrl(evolutionUrl).pipe(
          mergeMap((evolutionChain: any) => {
            let currentStage = evolutionChain.chain;
            const evolutionRequests = [];

            while (currentStage) {
              const pokemonRequest = this.getPokemon(currentStage.species.name);
              evolutionRequests.push(pokemonRequest);
              currentStage = currentStage.evolves_to[0]; 
            }

            return forkJoin(evolutionRequests);
          })
        );
      })
    );
  }

  getEvolutionChainByUrl(url: string): Observable<any> {
    return this.http.get(url);
  }

  getPokemon(pokemon: string): Observable<Pokemon> {
    const url = this.baseUrl + 'pokemon/' + pokemon;
    return this.getPokemonByUrl(url);
  }
}
