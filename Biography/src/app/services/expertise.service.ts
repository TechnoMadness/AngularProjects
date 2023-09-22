import {HttpClientModule, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, tap } from 'rxjs';
import { WeaponModel } from '../models/weapon.model';

@Injectable({
  providedIn: 'root',
})
export class ExpertiseService {

    
    public AllWeapons ='http://localhost:3000/weapons';

    public constructor(private http: HttpClient) {}
    
    

    
    public getAllWeapons(): Observable<any>{
      return this.http.get<WeaponModel[]>(this.AllWeapons);
  }

    public getWeaponsById(movieId: number): Observable<WeaponModel>
    {
      return this.http.get<WeaponModel>(this.AllWeapons+ "/" + movieId);
    }
    
  createWeapons(movie: WeaponModel): Observable<WeaponModel> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': 'Token'
      })
    }
    
    return this.http.post<WeaponModel>(this.AllWeapons, movie, httpOptions);
    }
}