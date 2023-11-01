import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageListComponent } from './pages/page-list/page-list.component';
import { PageViewComponent } from './pages/page-view/page-view.component';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';

const routes: Routes = [
  { path: '', redirectTo: '/lista', pathMatch: 'full' },
  { path: 'lista', component: PageListComponent },
  { path: 'pokemon/:id', component: PageViewComponent },
];

@NgModule({
  declarations: [PageViewComponent, PageListComponent],
  imports: [RouterModule.forRoot(routes), BrowserModule, SharedModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
