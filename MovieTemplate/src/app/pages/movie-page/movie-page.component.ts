import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieStructure } from 'src/app/models/movie_struct';
import { MoviesListService } from 'src/app/services/list.movies.service';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent implements OnInit{
  
  movie!: MovieStructure;

  constructor(private MoviesService: MoviesListService,private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
      this.activatedRoute.params.subscribe(params =>{
        this.MoviesService.getMovieById(params["id"]).subscribe(data=> {
          this.movie=data;
          console.log(data);
        })
      })
  }
}
