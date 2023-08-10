import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IVoluntarios } from '../interfaces/ivoluntarios';
import { GET_VOLUNTARIOS } from '../interfaces/itransacciones';
import { IRespuestaSP } from '../interfaces/irespuesta-sp';

@Injectable({
  providedIn: 'root'
})
export class VoluntariosService {
  
  private myAppUrl:string   = environment.endpoint;
  private myApiUrl:string   = 'api/Voluntarios/Voluntarios/';
  private myApiUrl2:string   = 'api/Voluntarios/';

  constructor(private http:HttpClient) { }


  getVoluntarios(): Observable<IVoluntarios[]> {
    return this.http.get<IVoluntarios[]>(`${this.myAppUrl}${this.myApiUrl}${GET_VOLUNTARIOS}`);
  }

  crudVoluntarios(Voluntario: IVoluntarios): Observable<IRespuestaSP>{
    return this.http.post<IRespuestaSP>(`${this.myAppUrl}${this.myApiUrl2}`,Voluntario);
  }

}