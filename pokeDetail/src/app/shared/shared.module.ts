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
import { PokemonAbilityComponent } from './pokemon-ability/pokemon-ability.component';
import { PokemonVarietiesComponent } from './pokemon-varieties/pokemon-varieties.component';
import { PokemonEvolutionComponent } from './pokemon-evolution/pokemon-evolution.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PokemonCardComponent,
    PokemonTypeComponent,
    FilterComponent,
    PokemonDetailsComponent,
    PokemonImageComponent,
    StatBarComponent,
    PokemonStatsComponent,
    PokemonAbilityComponent,
    PokemonVarietiesComponent,
    PokemonEvolutionComponent
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule,RouterModule],
  exports: [
    PokemonCardComponent,
    PokemonTypeComponent,
    FilterComponent,
    PokemonDetailsComponent,
    PokemonImageComponent,
    PokemonStatsComponent,
    PokemonAbilityComponent,
    PokemonVarietiesComponent,
    PokemonEvolutionComponent
  ],
})
export class SharedModule {}
