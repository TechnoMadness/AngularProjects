import {HttpClientModule, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MovieStructure} from '../models/movie_struct';
import { Observable, catchError, tap } from 'rxjs';
import { CategoryStruct } from '../models/category_struct';

@Injectable({
  providedIn: 'root',
})
export class MoviesListService {

    
    public popularMovies ='http://localhost:3000/popular-movies';
    public AllMovies ='http://localhost:3000/movielist';
    public Categories = 'http://localhost:3000/category'
    public constructor(private http: HttpClient) {}
    
    

    public getPopularMovies(): Observable<any>{
        return this.http.get<MovieStructure[]>(this.popularMovies);
    }
    
    public getAllMovies(): Observable<any>{
      return this.http.get<MovieStructure[]>(this.AllMovies);
  }

    public getMovieById(movieId: number): Observable<MovieStructure>
    {
      return this.http.get<MovieStructure>(this.AllMovies+ "/" + movieId);
    }

    getCategories(): Observable<CategoryStruct[]> {
    return this.http.get<CategoryStruct[]>(this.Categories);
  }
    
  createMovie(movie: MovieStructure): Observable<MovieStructure> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': 'Token'
      })
    }
    
    return this.http.post<MovieStructure>(this.AllMovies, movie, httpOptions);
    }
}