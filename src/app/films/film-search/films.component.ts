import { Film } from './../../models/films';
import { Observable, Subscription } from 'rxjs';
import { FilmsService } from './../services/films.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  filmToSearch: string = ''
  filmsResults: Observable<Film[]>
  constructor(private filmsService: FilmsService) { }

  ngOnInit() {

  }

  searchFilms() {
    if (this.filmToSearch.length > 0) {
      this.filmsResults= this.filmsService
      .searchFilms(this.filmToSearch)
    }
  }

}
