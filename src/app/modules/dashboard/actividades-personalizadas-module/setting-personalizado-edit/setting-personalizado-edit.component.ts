import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IPersonalizado } from 'src/app/interfaces/iactividad';
import { ActividadPersonalizadaServicesService } from 'src/app/services/actividad-personalizada-services.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-setting-personalizado-edit',
  templateUrl: './setting-personalizado-edit.component.html',
  styleUrls: ['./setting-personalizado-edit.component.css']
})
export class SettingPersonalizadoEditComponent implements OnInit {
  form: FormGroup;  

  constructor(
    private fb: FormBuilder,
    private _toastServices: ToastService,
    private _actividadesServices: ActividadPersonalizadaServicesService,
    private dialogRef: MatDialogRef<SettingPersonalizadoEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IPersonalizado,
  ) {
    this.form = this.fb.group({
      nombreUsuario:        ['', Validators.required],
      telefono:             ['', Validators.required],
      cantidadPersonas:     ['', Validators.required],
      cantidadGuias:        ['', Validators.required],
      hora:                 ['', Validators.required],
      fecha:                ['', Validators.required],
      descripcion:          ['', Validators.required],
    })
  }

  ngOnInit(): void {
    if(this.data){
      this.form.patchValue({
        nombreUsuario:              this.data.nombreUsuario,
        telefono:                   this.data.telefono,
        cantidadPersonas:           this.data.cantidadPersonas,
        cantidadGuias:              this.data.cantidadGuias,
        hora:                       this.data.hora,
        fecha:                      this.data.fecha,
        descripcion:                this.data.descripcion
      })
    }
  }  

  enviar(){
    if(this.form.invalid){
      this._toastServices.error("Campos vacíos","Error");
      return
    }

    const fechaselect: Date = this.form.value.fecha;
    if (fechaselect < new Date()) {
      this._toastServices.error("Seleccione una fecha válida", "Error");
      return;
    }

    const precio = this.form.value.cantidadPersonas * 15;
    
    const actividad: IPersonalizado = {
      id_personalizado:     this.data.id_personalizado,
      nombreUsuario:        this.form.value.nombreUsuario,
      telefono:             this.form.value.telefono,
      cantidadPersonas:     this.form.value.cantidadPersonas,
      cantidadGuias:        this.form.value.cantidadGuias,
      hora:                 this.form.value.hora,
      fecha:                this.form.value.fecha,
      descripcion:          this.form.value.descripcion,
      estado:               true,
      precio:               precio
    }
        
    this._actividadesServices.updateActividad(actividad);
    
    this.dialogRef.close("actualizado")

  }
}
