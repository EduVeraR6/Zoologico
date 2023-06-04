import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IActividad } from 'src/app/interfaces/iactividad';
import { ActividadServiceService } from 'src/app/services/actividad-service.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-setting-activities-addedit',
  templateUrl: './setting-activities-addedit.component.html',
  styleUrls: ['./setting-activities-addedit.component.css']
})
export class SettingActivitiesAddeditComponent implements OnInit {
  form: FormGroup;
  fileName!: any;
  title: string = "Agregar Actividad";
  iconName: string = "add";
  
  constructor(
    private dialogRef: MatDialogRef<SettingActivitiesAddeditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IActividad,
    private fb: FormBuilder,
    private toast: ToastService,
    private _actividadService: ActividadServiceService
    ) {
    this.form = this.fb.group({
      nombre:               ['', Validators.required],
      imagen:               ['', Validators.required],
      cantidadPersonas:     ['', Validators.required],
      cantidadGuias:        ['', Validators.required],
      precio:               ['', Validators.required],
      descripcion:          ['', Validators.required],
      hora:                 ['', Validators.required],
      time:                 ['', Validators.required],      
    })
  }

  onFileSelected(event: Event) {
    this.fileName = (event.target as HTMLInputElement).files?.[0]
  }  

  ngOnInit(): void {
    if(this.data){
      this.title              = "Editar Actividad";
      this.iconName           = "edit";
      this.fileName           = this.data.imagen;
      this.form.patchValue({
        nombre:               this.data.nombre,
        cantidadPersonas:     this.data.cantidadPersonas,
        cantidadGuias:        this.data.cantidadGuias,
        precio:               this.data.precio,
        descripcion:          this.data.descripcion,
        hora:                 this.data.hora,
        time:                 this.data.time
      })
    }
  }

  accion(){
    if(this.form.invalid){
      this.toast.error("Campos vacíos","Error")
      return
    }

    const acticidad: IActividad = {
      id_actividad:       (this.data) ? this.data.id_actividad : this._actividadService.actividades.length+1,
      nombre:             this.form.value.nombre,
      cantidadPersonas:   this.form.value.cantidadPersonas,
      cantidadGuias:      this.form.value.cantidadGuias,
      precio:             this.form.value.precio,
      descripcion:        this.form.value.descripcion,
      hora:               this.form.value.hora,
      time:               this.form.value.time,
      imagen:             this.fileName.name,
      estado:             true
    }

    if(this.data){
      this._actividadService.updateActividad(acticidad)
      this.dialogRef.close("actualizado")
      return
    }

    if(!this.data){
      this._actividadService.addActividad(acticidad)
      this.dialogRef.close("agregado")
      return
    }
    
    this.toast.error("A ocurrido un error","Lo sentimos")
  }

}
