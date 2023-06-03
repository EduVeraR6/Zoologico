import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { throwDialogContentAlreadyAttachedError } from '@angular/cdk/dialog';
import { NavigationExtras, Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import {NgIf} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-registrar-voluntarios',
  templateUrl: './registrar-voluntarios.component.html',
  styleUrls: ['./registrar-voluntarios.component.css']
})
export class RegistrarVoluntariosComponent {
  alert: boolean=false;
    emailFormControl = new FormControl('', [Validators.required, Validators.email]);
    
    voluntariosNuevos = new FormGroup({
      nombres: new FormControl('', Validators.required),
      apellidos: new FormControl('', Validators.required),
      telefono: new FormControl('', Validators.required),
      edad: new FormControl('', Validators.required),
    })
  
}
