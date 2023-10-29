import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeDexListComponent } from './poke-dex-list/poke-dex-list.component';
import { PokemonComponent } from './pokemon/pokemon.component';

const routes: Routes = [
  {path:'lista', component: PokeDexListComponent},
  {path:'pokemon/:id' ,component: PokemonComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
