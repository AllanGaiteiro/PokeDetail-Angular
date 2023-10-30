import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageListComponent } from './pages/page-list/page-list.component';
import { PageViewComponent } from './pages/page-view/page-view.component';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  { path: '', redirectTo: '/lista', pathMatch: 'full' },
  { path: 'lista', component: PageListComponent },
  { path: 'pokemon/:id', component: PageViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
