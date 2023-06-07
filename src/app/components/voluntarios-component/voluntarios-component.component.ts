import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegistrarVoluntariosComponent } from '../registrar-voluntarios/registrar-voluntarios.component';


@Component({
  selector: 'app-voluntarios-component',
  templateUrl: './voluntarios-component.component.html',
  styleUrls: ['./voluntarios-component.component.css']
})
export class VoluntariosComponentComponent {
  people = [
    { name: 'Maximiliano Cabrera', photo:"../../../assets/img/pages-voluntarios/N1.jpg", details: 'Detalles de la Persona 1' },
    { name: 'Derian', photo: 'ruta/foto2.jpg', details: 'Detalles de la Persona 2' },
    { name: 'Jamileth', photo: 'ruta/foto3.jpg', details: 'Detalles de la Persona 3' },
    { name: 'Jamileth', photo: 'ruta/foto3.jpg', details: 'Detalles de la Persona 3' },
    { name: 'Jamileth', photo: 'ruta/foto3.jpg', details: 'Detalles de la Persona 3' },
    { name: 'Jamileth', photo: 'ruta/foto3.jpg', details: 'Detalles de la Persona 3' },
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
  constructor(private dialog:MatDialog){}
  openDialog(){
    this.dialog.open(RegistrarVoluntariosComponent)
  }

  ngOnInit():void{
    
  }
}
