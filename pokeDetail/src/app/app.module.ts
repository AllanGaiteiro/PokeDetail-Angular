import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PageListComponent } from './pages/page-list/page-list.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { PokemonTypeComponent } from './components/pokemon-type/pokemon-type.component';
import { FilterComponent } from './components/filter/filter.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PageListComponent,
    PokemonCardComponent,
    PokemonTypeComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
