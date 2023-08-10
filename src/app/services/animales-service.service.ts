import { HttpClient } from '@angular/common/http';
import { IAnimales } from '../interfaces/ianimales';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GET_ANIMALES } from '../interfaces/itransacciones';
import { IRespuestaSP } from '../interfaces/irespuesta-sp';

@Injectable({
  providedIn: 'root',
})
export class AnimalesService {

private myAppUrl:string = environment.endpoint;
private myApiUrl:string = 'api/Animales/Animales/';

  constructor(private http:HttpClient) {}
  
  getAnimales():Observable<IAnimales[]>{
    return this.http.get<IAnimales[]>(`${this.myAppUrl}${this.myApiUrl}${GET_ANIMALES}`);
  }


  crudAnimal(animal : IAnimales):Observable<IRespuestaSP>{
    return this.http.post<IRespuestaSP>(`${this.myAppUrl}${this.myApiUrl}`,animal);
  }
}
