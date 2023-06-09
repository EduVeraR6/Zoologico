import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-listas-voluntarios',
  templateUrl: './listas-voluntarios.component.html',
  styleUrls: ['./listas-voluntarios.component.css']
})
export class ListasVoluntariosComponent {
  constructor(private dialog:MatDialog){}
  people = [
    { name: 'Estela', photo:"../../../assets/img/pages-voluntarios/imgEstela.jpg", Edad:24,ocupacion:'Cuidado animal', Motivacion:'"Cada día como voluntario me recuerda por qué amo tanto a los animales y me impulsa a seguir contribuyendo a su cuidado y conservación.' },
    { name: 'Maximiliano', photo:"../../../assets/img/pages-voluntarios/imgMaximiliano1.jpg", Edad:26,ocupacion:'Cuidado animal', Motivacion:'Mi pasión por los animales me impulsa a ser voluntario, donde puedo marcar la diferencia en su cuidado y promover su conservación.' },
    { name: 'Jamileth', photo:"../../../assets/img/pages-voluntarios/imgJamileth1.jpg", Edad:48,ocupacion:'Cuidado animal', Motivacion:'La satisfacción que obtengo como voluntario proviene de ver cómo mi dedicación y atención ayudan a mejorar la calidad de vida de los animales.' },
    { name: 'Derian', photo:"../../../assets/img/pages-voluntarios/igmDerian.jpg", Edad:24,ocupacion:'Cuidado animal', Motivacion:'Cada día como voluntario es una oportunidad emocionante para conectarme con los animales y contribuir a su bienestar físico y emocional.' },
    { name: 'Lady', photo:"../../../assets/img/pages-voluntarios/imgLady.jpg", Edad:24,ocupacion:'Cuidado animal', Motivacion:'Mi motivación para ser voluntario radica en mi profundo respeto y admiración por la belleza y la diversidad de la vida animal.' },
    { name: 'Melissa', photo:"../../../assets/img/pages-voluntarios/imgMelissa.jpg", Edad:24,ocupacion:'Cuidado animal', Motivacion:'Ser voluntario me permite vivir mi sueño de trabajar directamente con animales y ser una voz para su protección y bienestar.' },
    { name: 'Mirian', photo:"../../../assets/img/pages-voluntarios/imgMirian.jpg", Edad:24,ocupacion:'Cuidado animal', Motivacion:'Ser voluntario me llena de felicidad al poder brindarles a los animales el cuidado y el amor que merecen.' },
  ];

  showModal = false;
  selectedPerson: any;

  openModal(person: any) {
    this.selectedPerson = person;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
