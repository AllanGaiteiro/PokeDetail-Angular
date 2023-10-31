import {
  Component,
  OnInit,
  ElementRef,
  HostListener,
  OnDestroy,
} from '@angular/core';

import { PokedexService } from '../../services/pokedex.service';
import { Pokemon } from 'src/app/models/pokemon.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css'],
})
export class PageListComponent implements OnInit, OnDestroy {
  pokemonList: Pokemon[] = [];
  pokedexSubscription!: Subscription;
  filtroValuer: string = '';
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    this.checkScroll();
  }

  totalPokemons: number = 0;

  constructor(private pokedexService: PokedexService, private el: ElementRef) {}

  ngOnInit() {
    this.loadPokemonList();
  }
  ngOnDestroy(): void {
    if (this.pokedexSubscription) {
      this.pokedexSubscription.unsubscribe();
    }
  }

  onFilterChange(filtroValuer: string) {
    this.filtroValuer = filtroValuer;
    console.log('Valor do filtro:', filtroValuer);
    if (this.filtroValuer) {
      this.loadPokemonSearch(filtroValuer);
    } else {
      this.loadPokemonList();
    }
  }

  private loadPokemonSearch(filtroValuer: string) {
    this.pokedexSubscription = this.pokedexService
      .getPokemon(filtroValuer)
      .subscribe((res) => {
        if (res) {
          this.pokemonList = [res];
        }
      });
  }

  loadPokemonList() {
    this.pokedexSubscription = this.pokedexService
      .getPokemonList(this.totalPokemons)
      .subscribe(
        (data: Pokemon[]) => {
          this.pokemonList.push(...data);
          this.totalPokemons += this.pokemonList.length;
        },
        (error) => {
          console.error('Erro ao carregar a lista de Pokémon', error);
        }
      );
  }

  checkScroll() {
    if (this.filtroValuer) {
      return;
    }
    const element = this.el.nativeElement;
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      this.loadPokemonList();
    }
  }
}
