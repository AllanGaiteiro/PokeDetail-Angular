import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { PokemonList } from '../models/pokemon-list.model';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  private baseUrl = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) {}

  getPokemonList(offset: number = 0, limit: number = 20): Observable<PokemonList> {
    const url = `${this.baseUrl}pokemon/?offset=${offset}&limit=${limit}`;
    return this.http.get(url).pipe(
      map((data: any) => new PokemonList(data))
    );
  }

  getPokemonDetails(id: number): Observable<Pokemon> {
    const url = `${this.baseUrl}pokemon/${id}/`;
    return this.http.get(url).pipe(
      map((data: any) => new Pokemon(data))
    );
  }
}
