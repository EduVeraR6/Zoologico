import { Injectable } from '@angular/core';
import { ISolicitudV } from '../interfaces/ivoluntarios';

@Injectable({
  providedIn: 'root'
})
export class SolicitudVolunServicesService {

  constructor() { }
  solicitudes: ISolicitudV[] = [
    {
      id_solicitud: 1, nombres: "Juan",apellidos:"Vargas",cedula:"0832132153",edad:45, telefono: "1234567890",
      experiencia:"Ninguna" ,motivacion: "Querer cuidar a los animales y su habitat",estado: true
    }
  ];



getSolicitudes(){
  return this.solicitudes.filter(e => e.estado === true)

}

addActividad(solicitudNew: ISolicitudV){
  this.solicitudes.push(solicitudNew)
}

updateActividad(solicitudUpdate: ISolicitudV) {
  this.solicitudes.forEach(elemento => {
    if (elemento.id_solicitud === solicitudUpdate.id_solicitud) {
      Object.assign(elemento, solicitudUpdate);
    }
  });
}

deleteActividad(id: number){
  this.solicitudes.forEach(elemento => {
    if(elemento.id_solicitud === id){
      elemento.estado = false
    }
  })
}

}
