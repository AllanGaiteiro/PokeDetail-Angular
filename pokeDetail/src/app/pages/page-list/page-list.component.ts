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
  isLoading = false;
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    this.checkScroll();
  }

  pokemonsLenght: number = 0;

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
    if (this.isLoading) {
      // Se já está carregando, não faça nada
      return;
    };
    this.pokedexSubscription = this.pokedexService
      .getPokemonList(this.pokemonsLenght)
      .subscribe(
        (data: Pokemon[]) => {
          if (data.length > 0) {
            data.map((p) => {
              if (this.pokemonList[p.id - 1]) {
                return;
              } else {
                this.pokemonList.push(p);
              }
            });
          }
          this.isLoading = false;
          this.pokemonsLenght = this.pokemonList.length;
        },
        (error) => {
          console.error('Erro ao carregar a lista de Pokémon', error);
          this.isLoading = false; // Marque que o carregamento terminou mesmo em caso de erro
        }
      );
  }

  checkScroll() {
    if (this.filtroValuer) {
      return;
    }

    const threshold = 200;
    const currentPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    const windowHeight =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;

    if (
      document.documentElement.scrollHeight - currentPosition <=
      windowHeight + threshold
    ) {
      this.loadPokemonList();
    }
  }
}
