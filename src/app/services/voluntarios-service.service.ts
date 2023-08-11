import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IVoluntarios } from '../interfaces/ivoluntarios';
import { IRespuestaSP } from '../interfaces/irespuesta-sp';

@Injectable({
  providedIn: 'root'
})
export class VoluntariosService {
  
  private myAppUrl:string   = environment.endpoint;
  private myApiUrl:string   = 'api/Voluntarios/Voluntarios/';

  constructor(private http:HttpClient) {}

  getVoluntarios(transacion: string):Observable<IVoluntarios[]>{
    return this.http.get<IVoluntarios[]>(`${this.myAppUrl}${this.myApiUrl}${transacion}`);
  }

  crudVoluntarios(voluntario: IVoluntarios): Observable<IRespuestaSP>{
    return this.http.post<IRespuestaSP>(`${this.myAppUrl}${this.myApiUrl}`,voluntario);
  }

} 