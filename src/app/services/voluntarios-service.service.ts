import { IVoluntarios } from '../interfaces/ivoluntarios';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class VoluntariosService{
    constructor(){}

    voluntarios : IVoluntarios[]=[

        {
            id_voluntarios :1,nombres : "Jamileth",apellidos:"Vera", cedula: "0955147871" , edad : 24,telefono:"0962712966" ,experiencia : "ninguna", motivacion:"Amor a los animales",
           imagen : "imgJamileth1.jpg", estado: true
        } 
        

    ]

    getVolutarios(){
        return this.voluntarios
      }
    
      addVoluntarios(voluntariosNew: IVoluntarios){
        this.voluntarios.push(voluntariosNew)
      }
    
      updateVoluntarios(voluntariosUpdate: IVoluntarios) {
        this.voluntarios.forEach(elemento => {
          if (elemento.id_voluntarios === voluntariosUpdate.id_voluntarios) {
            Object.assign(elemento,voluntariosUpdate);
          }
        });
      }
    
      deleteVoluntarios(id: number){
        this.voluntarios.forEach(elemento => {
          if(elemento.id_voluntarios === id){
            elemento.estado = false
          }
        })
      }
}