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
    { name: 'Maximiliano', photo:"../../../assets/img/pages-voluntarios/N1.jpg", details: 'Detalles de la Persona 1' },
    { name: 'Estela', photo: 'ruta/foto2.jpg', details: 'Detalles de la Persona 2' },
    { name: 'Jamileth', photo: 'ruta/foto3.jpg', details: 'Detalles de la Persona 3' },
    { name: 'Derian', photo: 'ruta/foto3.jpg', details: 'Detalles de la Persona 3' },
    { name: 'Carlos', photo: 'ruta/foto3.jpg', details: 'Detalles de la Persona 3' },
    { name: 'Patricia', photo: 'ruta/foto3.jpg', details: 'Detalles de la Persona 3' },
    { name: 'Jose', photo: 'ruta/foto3.jpg', details: 'Detalles de la Persona 4' }
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
