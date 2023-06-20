import { IVoluntarios } from '../interfaces/ivoluntarios';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class VoluntariosService{
    constructor(){}

    voluntarios : IVoluntarios[]=[

        {
            id_voluntarios :1,nombres : "Jamileth",apellidos:"Vera", cedula: "0955147871" , edad : 48,telefono:"0962712966" ,experiencia : "ninguna", motivacion:"Amor a los animales",
           imagen : "imgJamileth1.jpg", estado: true
        } ,
        {
          id_voluntarios :2,nombres : "Estela",apellidos:"Lopez", cedula: "0985632145" , edad : 26,telefono:"0954521325" ,experiencia : "ninguna", motivacion:"Amor a los animales",
         imagen : "imgEstela.jpg", estado: true
      } ,
      {
        id_voluntarios :3,nombres : "Maximiliano",apellidos:"Cabrera", cedula: "0954310736" , edad : 27,telefono:"0912345678" ,experiencia : "ninguna", motivacion:"Amor a los animales",
       imagen : "imgMaximiliano1.jpg", estado: true
    },
     {
      id_voluntarios :4,nombres : "Derian",apellidos:"Rivera", cedula: "0954310869" , edad : 30,telefono:"0985236147" ,experiencia : "ninguna", motivacion:"Amor a los animales",
     imagen : "igmDerian.jpg", estado: true
    },
    {
        id_voluntarios :5,nombres : "Lady",apellidos:"Segura", cedula: "0985236147" , edad : 32,telefono:"0951236323" ,experiencia : "ninguna", motivacion:"Amor a los animales",
      imagen : "imgLady.jpg", estado: true
     },
     {
      id_voluntarios :6,nombres : "Melissa",apellidos:"Quinto", cedula: "1206165456" , edad : 30,telefono:"0922336512" ,experiencia : "ninguna", motivacion:"Amor a los animales",
    imagen : "imgMelissa.jpg", estado: true
      },
      {
        id_voluntarios :7,nombres : "Mirian",apellidos:"Salazar", cedula: "1852369741" , edad : 36,telefono:"0998855214" ,experiencia : "ninguna", motivacion:"Amor a los animales",
      imagen : "imgMelissa.jpg", estado: true
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