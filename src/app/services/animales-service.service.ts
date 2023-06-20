import { IAnimales } from '../interfaces/ianimales';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AnimalesService {
  constructor() {}

  //Datos Quemados
  animales: IAnimales[] = [
    {
      id_animales: 1,
      nombre: 'Mono Capuchino',
      edad: 10,
      especie: 'Cebus capucinus',
      genero: 'Macho',
      habitat:
        'Los monos capuchinos se encuentran en América Central y América del Sur, en países como Costa Rica, Panamá, Colombia, Ecuador, Perú y Brasil. ',
      observaciones:
        'Los monos capuchinos son de tamaño mediano, con un peso que oscila entre 2 y 4 kg. Tienen una cola prensil larga que les ayuda a moverse por los árboles. ',
      origen: 'América Central y América del Sur',
      estado: true,
      imagen: 'mono-capuchino.jpg',
    },
    {
      id_animales: 2,
      nombre: 'León',
      edad: 8,
      especie: 'Panthera leo',
      genero: 'Macho',
      habitat:
        'Los leones se encuentran principalmente en las regiones de África subsahariana, como las llanuras del Serengeti, el Parque Nacional Kruger y el Parque Nacional Masai Mara.',
      observaciones:
        'Los leones son conocidos por su melena distintiva en los machos y por ser animales sociales que viven en grupos llamados manadas.',
      origen: 'África subsahariana',
      estado: true,
      imagen: 'leon.jpg',
    },
    {
      id_animales: 3,
      nombre: 'Elefante africano',
      edad: 20,
      especie: 'Loxodonta africana',
      genero: 'Hembra',
      habitat:
        'Los elefantes africanos se encuentran en diversas regiones de África, como las sabanas, las selvas y los bosques lluviosos.',
      observaciones:
        'Los elefantes africanos son los animales terrestres más grandes y se caracterizan por sus grandes colmillos de marfil y sus orejas grandes.',
      origen: 'África',
      estado: true,
      imagen: 'elefante-africano.jpg',
    },
    {
      id_animales: 4,
      nombre: 'Tigre de Bengala',
      edad: 6,
      especie: 'Panthera tigris tigris',
      genero: 'Macho',
      habitat:
        'Los tigres de Bengala se encuentran principalmente en la India, Bangladesh, Nepal y Bután, habitando en áreas de selvas y bosques.',
      observaciones:
        'Los tigres de Bengala son felinos grandes y poderosos, conocidos por sus rayas distintivas en su pelaje.',
      origen: 'India',
      estado: true,
      imagen: 'tigre-bengala.jpg',
    },
    {
      id_animales: 5,
      nombre: 'Oso polar',
      edad: 12,
      especie: 'Ursus maritimus',
      genero: 'Hembra',
      habitat:
        'Los osos polares se encuentran en el Ártico, en regiones como Canadá, Groenlandia, Noruega, Rusia y Alaska.',
      observaciones:
        'Los osos polares son los mayores carnívoros terrestres y están adaptados para vivir en ambientes fríos, con un grueso pelaje blanco y una capa de grasa bajo la piel.',
      origen: 'Ártico',
      estado: true,
      imagen: 'oso-polar.jpg',
    },
    {
      id_animales: 6,
      nombre: 'Panda gigante',
      edad: 5,
      especie: 'Ailuropoda melanoleuca',
      genero: 'Hembra',
      habitat:
        'Los pandas gigantes se encuentran en algunas regiones montañosas de China, como las provincias de Sichuan, Shaanxi y Gansu.',
      observaciones:
        'Los pandas gigantes son conocidos por su pelaje blanco y negro distintivo y su dieta principalmente herbívora, que se basa en el bambú.',
      origen: 'China',
      estado: true,
      imagen: 'panda-gigante.jpg',
    },
  ];

  getAnimales() {
    return this.animales;
  }

  addAnimales(animalesNew: IAnimales) {
    this.animales.push(animalesNew);
  }

  updateAnimales(animalesUpdate: IAnimales) {
    this.animales.forEach((elemento) => {
      if (elemento.id_animales === animalesUpdate.id_animales) {
        Object.assign(elemento, animalesUpdate);
      }
    });
  }

  deleteAnimales(id: number) {
    this.animales.forEach((elemento) => {
      if (elemento.id_animales === id) {
        elemento.estado = false;
      }
    });
  }
}
