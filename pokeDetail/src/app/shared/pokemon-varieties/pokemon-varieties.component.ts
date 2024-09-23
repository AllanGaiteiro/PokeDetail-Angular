import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
    selector: 'app-pokemon-varieties',
    templateUrl: './pokemon-varieties.component.html',
    styleUrls: ['./pokemon-varieties.component.css'],
})
export class PokemonVarietiesComponent {
    @Input() pokemonName!: string;
    varieties: Pokemon[] = [];

    constructor(private pokemonService: PokedexService) { }

    ngOnInit() {
        if (this.pokemonName) {
            this.pokemonService.getPokemonVarieties(this.pokemonName).subscribe((data) => {
                this.varieties = data;
            });
        }

    }

    getPokemonImageUrl(pokemonId: number): string {
        const id = this.getNumber(3, pokemonId)
        const url = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`
        return url;
    }

    getNumber(length: number, id: number): string {
        let idStr = id + '';

        while (idStr.length < length) {
            idStr = '0' + idStr;
        }
        return idStr;
    }

}
