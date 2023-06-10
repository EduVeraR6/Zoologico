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
    { name: 'Estela', photo:"../../../assets/img/pages-voluntarios/imgEstela.jpg", Edad:24,ocupacion:'Guia'},
    { name: 'Maximiliano', photo:"../../../assets/img/pages-voluntarios/imgMaximiliano1.jpg", Edad:26,ocupacion:'Cuidado animal' },
    { name: 'Jamileth', photo:"../../../assets/img/pages-voluntarios/imgJamileth1.jpg", Edad:48,ocupacion:'Cuidado animal' },
    { name: 'Derian', photo:"../../../assets/img/pages-voluntarios/igmDerian.jpg", Edad:28,ocupacion:'Guia' },
    { name: 'Lady', photo:"../../../assets/img/pages-voluntarios/imgLady.jpg", Edad:32,ocupacion:'Cuidado animal' },
    { name: 'Melissa', photo:"../../../assets/img/pages-voluntarios/imgMelissa.jpg", Edad:30,ocupacion:'Guia'},
    { name: 'Mirian', photo:"../../../assets/img/pages-voluntarios/imgMirian.jpg", Edad:36,ocupacion:'Cuidado animal' },
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
