import { IAnimales } from '../interfaces/ianimales';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AnimalesService{
    constructor(){}

    animales : IAnimales[]=[

        {
            id_animales :1,nombre : "Mono Capuchino", edad : 10 , especie : "Cebus capucinus", genero:"Macho" , habitat:"Los monos capuchinos se encuentran en América Central y América del Sur, en países como Costa Rica, Panamá, Colombia, Ecuador, Perú y Brasil. ",observaciones:"Los monos capuchinos son de tamaño mediano, con un peso que oscila entre 2 y 4 kg. Tienen una cola prensil larga que les ayuda a moverse por los árboles. ",origen : "América Central y América del Sur"
            ,estado : true, imagen : "mono-capuchino.jpg"
        } ,
        {
          id_animales :2,nombre : "Tigre de Bengala", edad : 5, especie : "Panthera tigris tigris", genero:"Macho" , habitat:"Los tigres de Bengala habitan en diversos hábitats como bosques tropicales, manglares y áreas de vegetación densa cercanas a fuentes de agua.",observaciones:"Los tigres de Bengala son conocidos por su pelaje anaranjado con rayas negras características. Son la subespecie de tigre más numerosa y se consideran en peligro de extinción debido a la destrucción de su hábitat y la caza furtiva.",origen : "Los tigres de Bengala son nativos de la región de Bengala en el subcontinente indio, incluyendo Bangladesh, India, Nepal y Bután."
          ,estado : true, imagen : "tigre-bengala.jpg"
        }

    ]

    getAnimales(){
        return this.animales
      }
    
      addAnimales(animalesNew: IAnimales){
        this.animales.push(animalesNew)
      }
    
      updateAnimales(animalesUpdate: IAnimales) {
        this.animales.forEach(elemento => {
          if (elemento.id_animales === animalesUpdate.id_animales) {
            Object.assign(elemento,animalesUpdate);
          }
        });
      }
    
      deleteAnimales(id: number){
        this.animales.forEach(elemento => {
          if(elemento.id_animales === id){
            elemento.estado = false
          }
        })
      }
}