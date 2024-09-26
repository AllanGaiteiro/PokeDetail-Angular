import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-pokemon-image',
  templateUrl: './pokemon-image.component.html',
  styleUrls: ['./pokemon-image.component.css'],
})
export class PokemonImageComponent implements OnInit, OnChanges {
  @Input() pokemonName?: string;
  @Input() pokemonId?: number;
  @Input() type: 'detail' | 'full' = 'detail';
  
  isPokeballOpen = false; // Controla a abertura da Pokébola
  isPokemonVisible = false; // Controla a visibilidade do Pokémon
  isPokemonColored = false; // Controla se o Pokémon está colorido

  ngOnInit(): void {
    this.startAnimationSequence();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Verifica se o pokemonId ou pokemonName mudaram
    if (changes['pokemonId'] || changes['pokemonName']) {
      // Reinicia o estado das animações
      this.resetAnimationStates();

      // Reinicia a sequência de animação após o reset
      if (this.type === 'full') {
        this.startAnimationSequence();
      }
    }
  }

  getNumber(length: number, id: number): string {
    let idStr = id + '';

    while (idStr.length < length) {
      idStr = '0' + idStr;
    }
    return idStr;
  }

  resetAnimationStates() {
    // Reseta todas as variáveis para o estado inicial
    this.isPokeballOpen = false;
    this.isPokemonVisible = false;
    this.isPokemonColored = false;
  }

  startAnimationSequence() {
    // Abre a Pokébola após 1 segundo
    setTimeout(() => {
      this.isPokeballOpen = true;

      // Mostra o Pokémon em branco após a abertura da Pokébola
      setTimeout(() => {
        this.isPokemonVisible = true;

        // Aplica a cor ao Pokémon após ele ser exibido
        setTimeout(() => {
          this.isPokemonColored = true;
        }, 500);
      }, 500);
    }, 500);
  }
}
