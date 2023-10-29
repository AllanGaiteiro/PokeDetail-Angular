import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../../services/pokedex.service';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

  constructor(private pokemonService: PokedexService){

  }
  ngOnInit(): void {
    this.pokemonService.getPokemonList().subscribe((data) => {
      console.log(data);
    });
  }

  
}
