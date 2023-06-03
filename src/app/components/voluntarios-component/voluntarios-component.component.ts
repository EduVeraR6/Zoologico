import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegistrarVoluntariosComponent } from '../registrar-voluntarios/registrar-voluntarios.component';


@Component({
  selector: 'app-voluntarios-component',
  templateUrl: './voluntarios-component.component.html',
  styleUrls: ['./voluntarios-component.component.css']
})
export class VoluntariosComponentComponent {
  constructor(private dialog:MatDialog){}
  openDialog(){
    this.dialog.open(RegistrarVoluntariosComponent)
  }

  ngOnInit():void{
    
  }
  voluntarios = [
    { nombre: 'Voluntario 1', edad: 25, descripcion: 'Lorem ipsum dolor sit amet.' },
    { nombre: 'Voluntario 2', edad: 30, descripcion: 'Lorem ipsum dolor sit amet.' },
    { nombre: 'Voluntario 3', edad: 28, descripcion: 'Lorem ipsum dolor sit amet.' },
  ];
}
