import {HttpClientModule} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MovieStructure} from '../models/movie_struct';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PopularMovieService {

    
    public baseApi ='http://localhost:3000/movies';
    public constructor(private http: HttpClient) {}
    
    
    public createUser(model:MovieStructure)
    {
        return this.http.post(this.baseApi,model);
    }

    public getAllUsers(): Observable<any>{
        return this.http.get<MovieStructure[]>(this.baseApi);
    }
    
    addEmployee(data: any): Observable<any> {
        return this.http.post('http://localhost:3000/movies', data);
      }
    
      updateEmployee(id: number, data: any): Observable<any> {
        return this.http.put(`http://localhost:3000/movies/${id}`, data);
      }
    
      getEmployeeList(): Observable<any> {
        return this.http.get('http://localhost:3000/movies');
      }
    
      deleteEmployee(id: number): Observable<any> {
        return this.http.delete(`http://localhost:3000/movies/${id}`);
      }
    
    
    
    

}