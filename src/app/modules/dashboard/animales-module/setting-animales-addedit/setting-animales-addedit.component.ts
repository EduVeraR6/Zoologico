import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IAnimales } from 'src/app/interfaces/ianimales';
import { AnimalesService } from 'src/app/services/animales-service.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-setting-animales-addedit',
  templateUrl: './setting-animales-addedit.component.html',
  styleUrls: ['./setting-animales-addedit.component.css']
})
export class SettingAnimalesAddeditComponent implements OnInit {
  form: FormGroup;
  fileName!: any;
  title: string = "Agregar Animal";
  iconName: string = "add";

  constructor(
    private dialogRef: MatDialogRef<SettingAnimalesAddeditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IAnimales,
    private fb: FormBuilder,
    private toast: ToastService,
    private _animalesService: AnimalesService
  ) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      imagen: ['', Validators.required],
      edad: ['', Validators.required],
      especie: ['', Validators.required],
      genero: ['', Validators.required],
      origen: ['', Validators.required],
      habitat: ['', Validators.required],
      observaciones: ['', Validators.required],
    })
  }

  onFileSelected(event: Event) {
    this.fileName = (event.target as HTMLInputElement).files?.[0]
  }

  ngOnInit(): void {
    if (this.data) {
      this.title = "Editar Animal";
      this.iconName = "edit";
      this.fileName = this.data.imagen;
      this.form.patchValue({
        nombre: this.data.nombre,
        edad: this.data.edad,
        especie: this.data.especie,
        genero: this.data.genero,
        origen: this.data.origen,
        habitat: this.data.habitat,
        observaciones: this.data.observaciones
      })
    }
  }

  accion() {
    if (this.form.invalid) {
      this.toast.error("Campos vacíos", "Error")
      return
    }

    const animales: IAnimales= {
      id_animales: (this.data) ? this.data.id_animales : this._animalesService.animales.length + 1,
      nombre: this.form.value.nombre,
      edad: this.form.value.edad,
      especie: this.form.value.especie,
      genero: this.form.value.genero,
     origen: this.form.value.origen,
      habitat: this.form.value.habitat,
      observaciones: this.form.value.observaciones,
      imagen: this.fileName.name,
      estado: true
    }

    if (this.data) {
      this._animalesService.updateAnimales(animales)
      this.dialogRef.close("actualizado")
      return
    }

    if (!this.data) {
      this._animalesService.addAnimales(animales)
      this.dialogRef.close("agregado")
      return
    }

    this.toast.error("A ocurrido un error", "Lo sentimos")
  }

}
