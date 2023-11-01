import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter/filter.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonTypeComponent } from './pokemon-type/pokemon-type.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [PokemonCardComponent, PokemonTypeComponent, FilterComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  exports: [PokemonCardComponent, PokemonTypeComponent, FilterComponent],
})
export class SharedModule {}
