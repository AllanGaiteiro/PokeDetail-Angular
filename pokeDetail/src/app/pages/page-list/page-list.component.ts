import { Component, OnInit, ElementRef, HostListener } from '@angular/core';

import { PokedexService } from '../../services/pokedex.service';
import { Pokemon } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css'],
})
export class PageListComponent implements OnInit {
  pokemonList: Pokemon[] = [];
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    this.checkScroll();
  }

  totalPokemons: number = 0;

  constructor(private pokedexService: PokedexService, private el: ElementRef) {}

  ngOnInit() {
    this.loadPokemonList();
  }

  loadPokemonList() {
    this.pokedexService.getPokemonList(this.totalPokemons).subscribe(
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
    const element = this.el.nativeElement;
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      this.loadPokemonList();
    }
  }
}
