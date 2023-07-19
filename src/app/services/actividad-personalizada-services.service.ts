import { Injectable } from '@angular/core';
import { IPersonalizado } from '../interfaces/iactividad';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRespuestaSP } from '../interfaces/irespuesta-sp';
import { GET_PERSONALIZADOS } from '../interfaces/itransacciones';

@Injectable({
  providedIn: 'root'
})
export class ActividadPersonalizadaServicesService {

  private myAppUrl:string = environment.endpoint;
  private myApiUrl:string = 'api/Actividades/Personalizado/';

  constructor(private http:HttpClient) { }

  getPersonalizados(): Observable<IPersonalizado[]> {
    return this.http.get<IPersonalizado[]>(`${this.myAppUrl}${this.myApiUrl}${GET_PERSONALIZADOS}`);
  }

  crudPersonalizado(personalizado: IPersonalizado): Observable<IRespuestaSP>{
    return this.http.post<IRespuestaSP>(`${this.myAppUrl}${this.myApiUrl}`,personalizado);
  }

}
