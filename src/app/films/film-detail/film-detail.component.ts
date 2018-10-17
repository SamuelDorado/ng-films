import { Observable } from 'rxjs';
import { FilmsService } from './../services/films.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {
  filmDetail: Observable<any>
  constructor(private route: ActivatedRoute, private filmsService: FilmsService) { }

  ngOnInit() {
    const filmId = this.route.snapshot.params.id
    this.filmsService.getById(filmId).subscribe((data)=> {
      this.filmDetail = data
    })
  }

}
