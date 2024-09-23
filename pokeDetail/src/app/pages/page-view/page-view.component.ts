import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Import necessário para pegar o parâmetro da rota
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
  selector: 'app-page-view',
  templateUrl: './page-view.component.html',
  styleUrls: ['./page-view.component.css']
})
export class PageViewComponent implements OnInit {
  pokemonId?: string; // id vem da URL
  pokemon: Pokemon | null = null; // Definindo a propriedade

  constructor(
    private route: ActivatedRoute, // Injetando o ActivatedRoute
    private pokemonService: PokedexService // Injetando o serviço para buscar os dados
  ) {}

  ngOnInit(): void {
    // Pegando o id da URL usando ActivatedRoute
    this.pokemonId = this.route.snapshot.paramMap.get('id') || undefined;

    // Verificando se o ID foi capturado corretamente
    if (this.pokemonId) {
      // Chamando o serviço para pegar o Pokémon pelo ID
      this.pokemonService.getPokemon(this.pokemonId).subscribe(pokemon => {
        this.pokemon = pokemon;
      });
    }
  }
}
