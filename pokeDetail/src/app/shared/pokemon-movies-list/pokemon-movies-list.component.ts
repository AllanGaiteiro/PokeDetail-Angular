import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { PokemonMoveData } from 'src/app/models/pokemon.model';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
  selector: 'app-pokemon-movies-list',
  templateUrl: './pokemon-movies-list.component.html',
  styleUrls: ['./pokemon-movies-list.component.css'],
})
export class PokemonMoviesListComponent implements OnChanges, OnDestroy {
  @Input() id: number | null = null;
  moves?: PokemonMoveData['move'][] = [];
  pokemonMoveSubscription?: Subscription;

  constructor(private pokedexService: PokedexService) {}

  ngOnChanges(changes: SimpleChanges): void {
    let idValue = changes['id'];
    if (idValue && idValue.currentValue !== idValue.previousValue) {
      this.loadMoviesForPokemon();
    }
  }

  ngOnDestroy(): void {
    if (this.pokemonMoveSubscription) {
      this.pokemonMoveSubscription?.unsubscribe();
    }
  }

  private loadMoviesForPokemon() {
    this.pokemonMoveSubscription = this.pokedexService
      .getPokemonMoves(this.id + '')
      .subscribe({
        next: (res) => {
          this.moves = res;
        },
        complete: () => this.pokemonMoveSubscription?.unsubscribe(),
      });
  }
}
