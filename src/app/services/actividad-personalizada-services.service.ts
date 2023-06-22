import { Injectable } from '@angular/core';
import { IPersonalizado } from '../interfaces/iactividad';

@Injectable({
  providedIn: 'root'
})
export class ActividadPersonalizadaServicesService {

  constructor() { }

  actividades: IPersonalizado[] = [
    {
      id_personalizado: 1, nombreUsuario: "Juan Perez", telefono: 1234567890, cantidadPersonas: 2, cantidadGuias: 1, 
      precio: 50, hora: "10:00 A.M", fecha: new Date(2023,10,10), descripcion: "Visita al hábitat de los leones", estado: true
    },
    {
      id_personalizado: 2, nombreUsuario: "Maria Lopez", telefono: 9876543210, cantidadPersonas: 4, cantidadGuias: 2, 
      precio: 80, hora: "14:00 P.M", fecha: new Date(2023,7,27), descripcion: "Recorrido por la exhibición de aves", estado: true
    },
    {
      id_personalizado: 3, nombreUsuario: "Pedro Ramirez", telefono: 5555555555, cantidadPersonas: 1, cantidadGuias: 4, 
      precio: 25, hora: "16:00 P.M", fecha: new Date(2023,12,20), descripcion: "Interacción con los monos", estado: true
    },
    {
      id_personalizado: 4, nombreUsuario: "Laura Garcia", telefono: 3333333333, cantidadPersonas: 3, cantidadGuias: 1, 
      precio: 60, hora: "11:00 A.M", fecha: new Date(2023,8,14), descripcion: "Visita a la exhibición de reptiles", estado: false
    },
    {
      id_personalizado: 5, nombreUsuario: "Carlos Fernandez", telefono: 9999999999, cantidadPersonas: 2, cantidadGuias: 5, 
      precio: 40, hora: "13:00 P.M", fecha: new Date(2023,9,10), descripcion: "Tour por el acuario", estado: true
    }  
  ];

  getActividades(){
    return this.actividades.filter(e => e.estado === true)
  }

  addActividad(actividadNew: IPersonalizado){
    this.actividades.push(actividadNew)
  }

  updateActividad(actividadUpdate: IPersonalizado) {
    this.actividades.forEach(elemento => {
      if (elemento.id_personalizado === actividadUpdate.id_personalizado) {
        Object.assign(elemento, actividadUpdate);
      }
    });
  }

  deleteActividad(id: number){
    this.actividades.forEach(elemento => {
      if(elemento.id_personalizado === id){
        elemento.estado = false
      }
    })
  }
  
}
