import { Component, OnInit } from '@angular/core';
import { MovieStructure } from 'src/app/models/movie_struct';
import { MoviesListService } from 'src/app/services/list.movies.service';
import { MatTableDataSource } from '@angular/material/table';
import {  } from '@angular/material/grid-list';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  dataPopular : MovieStructure[]=[];
  dataAll : MovieStructure[]=[];
  constructor(private MoviesService: MoviesListService) {}
  
  
  ngOnInit(): void {
    this.getMovies();
  }


  getMovies(){
    this.MoviesService.getPopularMovies().subscribe({
      next:(res)=>{
        this.dataPopular = res;
      },

      error: (err) => {
        console.log(err)
      }
    })
    
  }
}
