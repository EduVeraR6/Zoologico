import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IVoluntarios } from 'src/app/interfaces/ivoluntarios';
import { VoluntariosService } from 'src/app/services/voluntarios-service.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-setting-voluntarios-addedit',
  templateUrl: './setting-voluntarios-addedit.component.html',
  styleUrls: ['./setting-voluntarios-addedit.component.css']
})
export class SettingVoluntariosAddeditComponent implements OnInit {
  form: FormGroup;
  fileName!: any;
  title: string = "Agregar Animal";
  iconName: string = "add";

  constructor(
    private dialogRef: MatDialogRef<SettingVoluntariosAddeditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IVoluntarios,
    private fb: FormBuilder,
    private toast: ToastService,
    private _voluntariosService: VoluntariosService
  ) {
    this.form = this.fb.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      cedula: ['', Validators.required],
      edad: ['', Validators.required],
      telefono: ['', Validators.required],
      experiencia: ['', Validators.required],
      motivacion: ['', Validators.required],
      imagen: ['', Validators.required],
    })
  }

  onFileSelected(event: Event) {
    this.fileName = (event.target as HTMLInputElement).files?.[0]
  }

  ngOnInit(): void {
    if (this.data) {
      this.title = "Editar Voluntario";
      this.iconName = "edit";
      this.fileName = this.data.imagen;
      this.form.patchValue({
        nombres: this.data.nombres,
        apellidos: this.data.apellidos,
        cedula: this.data.cedula,
        edad: this.data.edad,
        telefono: this.data.telefono,
        experiencia: this.data.experiencia,
        motivacion: this.data.motivacion
      })
    }
  }

  accion() {
    if (this.form.invalid) {
      this.toast.error("Campos vacíos", "Error")
      return
    }

    const voluntarios: IVoluntarios= {
      id_voluntarios: (this.data) ? this.data.id_voluntarios : this._voluntariosService.voluntarios.length + 1,
      nombres: this.form.value.nombre,
      apellidos: this.form.value.edad,
      cedula: this.form.value.especie,
      edad: this.form.value.genero,
     telefono: this.form.value.origen,
      experiencia: this.form.value.habitat,
      motivacion: this.form.value.observaciones,
      imagen: this.fileName.name,
      estado: true
    }

    if (this.data) {
      this._voluntariosService.updateVoluntarios(voluntarios)
      this.dialogRef.close("actualizado")
      return
    }

    if (!this.data) {
      this._voluntariosService.addVoluntarios(voluntarios)
      this.dialogRef.close("agregado")
      return
    }

    this.toast.error("A ocurrido un error", "Lo sentimos")
  }

}

