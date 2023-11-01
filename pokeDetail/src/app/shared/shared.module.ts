import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter/filter.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonTypeComponent } from './pokemon-type/pokemon-type.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { PokemonImageComponent } from './pokemon-image/pokemon-image.component';
import { StatBarComponent } from './stat-bar/stat-bar.component';
import { PokemonStatsComponent } from './pokemon-stats/pokemon-stats.component';

@NgModule({
  declarations: [
    PokemonCardComponent,
    PokemonTypeComponent,
    FilterComponent,
    PokemonDetailsComponent,
    PokemonImageComponent,
    StatBarComponent,
    PokemonStatsComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  exports: [
    PokemonCardComponent,
    PokemonTypeComponent,
    FilterComponent,
    PokemonDetailsComponent,
    PokemonImageComponent,
    PokemonStatsComponent
  ],
})
export class SharedModule {}
