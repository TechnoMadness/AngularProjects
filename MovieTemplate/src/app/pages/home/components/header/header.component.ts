import { Component, OnInit } from '@angular/core';
import { MovieStructure } from 'src/app/models/movie_struct';
import { PopularMovieService } from 'src/app/services/list.service';
import { MatTableDataSource } from '@angular/material/table';
import {  } from '@angular/material/grid-list';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  data : MovieStructure[]=[];
  constructor(private ErrorListService: PopularMovieService) {}
  
  
  ngOnInit(): void {
    this.getErrorList();
    console.log(this.data);
  }


  getErrorList(){
    this.ErrorListService.getAllUsers().subscribe({
      next:(res)=>{
        this.data = res;
      },

      error: (err) => {
        console.log(err)
      }
    })
  }
}
