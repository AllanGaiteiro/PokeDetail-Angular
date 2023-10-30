import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { PokemonData } from '../models/pokemon-data.model';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root',
})
export class PokedexService {
  private baseUrl = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) {}


  getPokemonList(offset: number = 0, limit: number = 20): Observable<any> {
    console.log(offset, offset + limit);
    const url = `${this.baseUrl}pokemon/?offset=${offset}&limit=${limit}`;
    return this.http.get(url).pipe(
      mergeMap((data: any) => {
        const pokemonUrls = data.results.map((result: any) => result.url);
        return forkJoin(
          pokemonUrls.map((url: string) => this.getPokemonDetails(url))
        );
      })
    );
  }

  getPokemonDetails(url: string): Observable<Pokemon> {
    return this.http
      .get<PokemonData>(url)
      .pipe(map((data: PokemonData) => new Pokemon(data)));
  }
}
