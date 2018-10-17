import { FormsModule } from '@angular/forms';
import { FilmsService } from './services/films.service';
import { FilmsComponent } from './film-search/films.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmsRoutingModule } from './films-routing.module';
import { FilmDetailComponent } from './film-detail/film-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FilmsRoutingModule,
    FormsModule
  ],
  declarations: [FilmsComponent,FilmDetailComponent],
  providers:[FilmsService]
})
export class FilmsModule { }
