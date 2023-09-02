import { Component, OnInit } from '@angular/core';
import { MovieStructure } from 'src/app/models/movie_struct';
import { MoviesListService } from 'src/app/services/list.movies.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  dataAll : MovieStructure[]=[];
  constructor(private MoviesService: MoviesListService) {}

  ngOnInit(): void {
      this.getMovies();
  }

  getMovies(){
  this.MoviesService.getAllMovies().subscribe({
    next:(res)=>{
      this.dataAll = res;
    },

    error: (err) => {
      console.log(err)
    }
  })
}
}
