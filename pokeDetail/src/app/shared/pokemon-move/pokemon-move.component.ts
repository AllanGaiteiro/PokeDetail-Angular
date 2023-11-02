import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PokemonMoveData, PokemonType } from 'src/app/models/pokemon.model';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
  selector: 'app-pokemon-move',
  templateUrl: './pokemon-move.component.html',
  styleUrls: [
    './pokemon-move.component.css',
  ],
})
export class PokemonMoveComponent implements OnInit, OnDestroy {
  @Input() move?: PokemonMoveData['move'];

  type?: PokemonType = PokemonType.Normal;
  pokemonAbilitySubscripition?: Subscription;
  power?: number;
  pp?: number;

  constructor(private pokedexService: PokedexService) {}

  ngOnInit(): void {
    if (this.move?.url) {
      this.pokemonAbilitySubscripition = this.pokedexService
        .getPokemonMoveDetail(this.move.url)
        .subscribe((res) => {
          if (res) {
            this.type = res.type;
            this.pp = res.pp;
            this.power = res.power;
          }
          this.pokemonAbilitySubscripition?.unsubscribe();
        });
    }
  }

  ngOnDestroy(): void {
    if (this.pokemonAbilitySubscripition) {
      this.pokemonAbilitySubscripition.unsubscribe();
    }
  }
  
  capitalizeFirstLetter(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
}
