import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageListComponent } from './pages/page-list/page-list.component';
import { PageViewComponent } from './pages/page-view/page-view.component';

const routes: Routes = [
  {path:'lista', component: PageListComponent},
  {path:'pokemon/:id' ,component: PageViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
