import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { throwDialogContentAlreadyAttachedError } from '@angular/cdk/dialog';
import { NavigationExtras, Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { ToastService } from 'src/app/services/toast.service';
import { MatDialogModule } from '@angular/material/dialog';
import { ISolicitudV } from 'src/app/interfaces/ivoluntarios';
import { SolicitudVolunServicesService } from 'src/app/services/solicitud-volun-services.service';

@Component({
  selector: 'app-registrar-voluntarios',
  templateUrl: './registrar-voluntarios.component.html',
  styleUrls: ['./registrar-voluntarios.component.css']
})
export class RegistrarVoluntariosComponent {
  voluntariosNuevos: FormGroup;
  constructor(
    private toast: ToastService,
    private dialog:MatDialog,
    private _soliService: SolicitudVolunServicesService,
    private fb: FormBuilder,
    private router: Router

  ){ this.voluntariosNuevos = this.fb.group({
    nombres:                 ['', Validators.required],
    apellidos:               ['', Validators.required],
    cedula:                  ['', Validators.required],
    edad:                    ['', Validators.required],
    telefono:                ['', Validators.required],
    experiencia:             ['', Validators.required],
    motivacion:            ['', Validators.required],
  })}

    
    
    accion() {
      if (this.voluntariosNuevos.invalid) {
        this.toast.error("Campos vacíos", "Error");
        return
      }else{
        this.toast.success("Solicitud enviada con exito", "Success");
        this.router.navigate(['/Voluntarios']);
        this.dialog.closeAll();
      }
      const solicitud: ISolicitudV = {
        id_solicitud:     this._soliService.solicitudes.length+1,
        nombres:        this.voluntariosNuevos.value.nombres,
        apellidos:             this.voluntariosNuevos.value.apellidos,
        cedula:     this.voluntariosNuevos.value.cedula,
        edad:        this.voluntariosNuevos.value.edad,
        telefono:                 this.voluntariosNuevos.value.telefono,
        experiencia:                this.voluntariosNuevos.value.experiencia,
        motivacion:          this.voluntariosNuevos.value.motivacion,
        estado:               true
      }
      this._soliService.addActividad(solicitud);
    }
}
