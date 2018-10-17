import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmsComponent } from './film-search/films.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';

const routes: Routes = [
  {path: "films", component: FilmsComponent},
  {path: "films/:id", component: FilmDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmsRoutingModule { }
