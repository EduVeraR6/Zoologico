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
}
