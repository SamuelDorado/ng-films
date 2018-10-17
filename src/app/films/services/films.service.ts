import { Film, OmdbResponse } from './../../models/films';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable()
export class FilmsService {

  constructor(private httpClient: HttpClient) { }

  searchFilms(filmName: string): Observable<Film[]> {
    return this.httpClient.get(`http://www.omdbapi.com/?apikey=bb0616f7&s=${filmName}`)
      .pipe(
        map((response: OmdbResponse) => response.Search)
      )
  }
   getById(id: string): Observable<any> {
     return this.httpClient.get(`http://www.omdbapi.com/?apikey=bb0616f7&i=${id}&plot=full`)
   }
} 
