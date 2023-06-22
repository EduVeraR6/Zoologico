import { IActividad } from './../interfaces/iactividad';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActividadServiceService {

  constructor() { }

  actividades: IActividad[] = [
    {
      id_actividad: 1, nombre: "Visita guiada por el zoológico", cantidadPersonas: 20, cantidadGuias: 2, precio: 10,
      descripcion: "Embárcate en una visita guiada y descubre la vida salvaje. Acompañado por expertos guías, aprende sobre animales y conservación. Observa de cerca leones, jirafas, y más. Únete y disfruta de la experiencia.",
      hora: "09:00 A.M", time: "1 Hora", imagen: "imagen1.jpg", estado: true
    },
    {
      id_actividad: 2, nombre: "Alimentación de los animales", cantidadPersonas: 10, cantidadGuias: 1, precio: 5,
      descripcion: "Participa en la hora de la comida de nuestros animales y observa cómo se alimentan.",
      hora: "10:00 A.M", time: "1 Hora 30 minutos", imagen: "imagen2.jpg", estado: true
    },
    {
      id_actividad: 3, nombre: "Exhibición de aves rapaces", cantidadPersonas: 30, cantidadGuias: 3, precio: 8,
      descripcion: "Disfruta de un emocionante espectáculo con nuestras aves rapaces y admira su destreza en vuelo.",
      hora: "11:00 A.M", time: "1 Hora", imagen: "imagen3.jpg", estado: true
    },
    {
      id_actividad: 4, nombre: "Sesión de fotos con animales", cantidadPersonas: 5, cantidadGuias: 1, precio: 15,
      descripcion: "Inmortaliza momentos mágicos con nuestros adorables animales en una sesión de fotos divertida.",
      hora: "11:00 A.M", time: "30 Minutos", imagen: "imagen4.jpg", estado: true
    },
    {
      id_actividad: 5, nombre: "Charlas educativas sobre conservación", cantidadPersonas: 15, cantidadGuias: 2, precio: 5,
      descripcion: "Aprende sobre la importancia de la conservación de especies en peligro de extinción en nuestras charlas educativas.",
      hora: "12:00 A.M", time: "45 Minutos", imagen: "imagen5.jpg", estado: true
    },
    {
      id_actividad: 6, nombre: "Safari en jeep por la reserva", cantidadPersonas: 8, cantidadGuias: 1, precio: 20,
      descripcion: "Embárcate en un emocionante safari en jeep y descubre la belleza de nuestra reserva natural.",
      hora: "14:00 P.M", time: "2 Horas", imagen: "imagen6.jpg", estado: true
    },
    {
      id_actividad: 7, nombre: "Exhibición de delfines", cantidadPersonas: 40, cantidadGuias: 4, precio: 12,
      descripcion: "Asiste a la impresionante exhibición de delfines y disfruta de sus increíbles acrobacias y habilidades acuáticas.",
      hora: "15:00 P.M", time: "1 Hora", imagen: "imagen7.jpg", estado: true
    },
    {
      id_actividad: 8, nombre: "Paseo en bicicleta por el parque", cantidadPersonas: 12, cantidadGuias: 2, precio: 8,
      descripcion: "Recorre nuestro extenso parque en bicicleta y disfruta de la naturaleza mientras haces ejercicio.",
      hora: "16:00 P.M", time: "1 Hora 30 minutos", imagen: "imagen8.jpg", estado: true
    },
    {
      id_actividad: 9, nombre: "Encuentro con los lemures", cantidadPersonas: 6, cantidadGuias: 1, precio: 15,
      descripcion: "Vive una experiencia única al interactuar con nuestros simpáticos lemures y conocer más sobre su comportamiento.",
      hora: "16:00 P.M", time: "45 Minutos", imagen: "imagen9.jpg", estado: true
    },
    {
      id_actividad: 10, nombre: "Cena temática africana", cantidadPersonas: 20, cantidadGuias: 3, precio: 30,
      descripcion: "Disfruta de una deliciosa cena con temática africana y sumérgete en la cultura de este fascinante continente.",
      hora: "17:00 P.M", time: "2 Horas", imagen: "imagen10.jpg", estado: true
    }
  ];

  getActividades(){
    return this.actividades.filter(e => e.estado === true)
  }

  addActividad(actividadNew: IActividad){
    this.actividades.push(actividadNew)
  }

  updateActividad(actividadUpdate: IActividad) {
    this.actividades.forEach(elemento => {
      if (elemento.id_actividad === actividadUpdate.id_actividad) {
        Object.assign(elemento, actividadUpdate);
      }
    });
  }

  deleteActividad(id: number){
    this.actividades.forEach(elemento => {
      if(elemento.id_actividad === id){
        elemento.estado = false
      }
    })
  }
}
