import {HttpClientModule, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, tap } from 'rxjs';
import { MissionModel } from '../models/mission.model';

@Injectable({
  providedIn: 'root',
})
export class MissionsService {

    
    public AllMissions ='http://localhost:3000/missions';

    public constructor(private http: HttpClient) {}
    
    

    
    public getAllMissions(): Observable<any>{
      return this.http.get<MissionModel[]>(this.AllMissions);
  }

    public getMissionById(movieId: number): Observable<MissionModel>
    {
      return this.http.get<MissionModel>(this.AllMissions+ "/" + movieId);
    }
    
  createMission(movie: MissionModel): Observable<MissionModel> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': 'Token'
      })
    }
    
    return this.http.post<MissionModel>(this.AllMissions, movie, httpOptions);
    }
}