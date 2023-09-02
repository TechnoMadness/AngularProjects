import {HttpClientModule} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MovieStructure} from '../models/movie_struct';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesListService {

    
    public popularMovies ='http://localhost:3000/popular-movies';
    public AllMovies ='http://localhost:3000/movielist';
    public constructor(private http: HttpClient) {}
    
    

    public getPopularMovies(): Observable<any>{
        return this.http.get<MovieStructure[]>(this.popularMovies);
    }
    
    public getAllMovies(): Observable<any>{
      return this.http.get<MovieStructure[]>(this.AllMovies);
  }
    
    
    
    

}