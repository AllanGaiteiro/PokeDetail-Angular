import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {
  PokemonAbilitiesData,
  PokemonType,
} from 'src/app/models/pokemon.model';
import { PokedexService } from 'src/app/services/pokedex.service';


@Component({
  selector: 'app-pokemon-ability',
  templateUrl: './pokemon-ability.component.html',
  styleUrls: [
    './pokemon-ability.component.css',
  ],
})
export class PokemonAbilityComponent implements OnInit, OnDestroy {
  @Input() ability?: PokemonAbilitiesData['ability'];

  type?: PokemonType = PokemonType.normal;
  pokemonAbilitySubscripition?: Subscription;

  constructor(private pokedexService: PokedexService) { }

  ngOnInit(): void {
    if (this.ability?.url) {
      this.pokemonAbilitySubscripition = this.pokedexService
        .getPokemonAbilityType(this.ability.url)
        .subscribe((res) => {
          this.type = res ?? PokemonType.normal;
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
