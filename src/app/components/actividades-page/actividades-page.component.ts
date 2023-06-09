import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IPersonalizado } from 'src/app/interfaces/iactividad';
import { ActividadPersonalizadaServicesService } from 'src/app/services/actividad-personalizada-services.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-actividades-page',
  templateUrl: './actividades-page.component.html',
  styleUrls: ['./actividades-page.component.css']
})
export class ActividadesPageComponent {
  form: FormGroup;  

  constructor(
    private fb: FormBuilder,
    private _toastServices: ToastService,
    private _actividadesServices: ActividadPersonalizadaServicesService,
    private router: Router
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
      id_personalizado:     this._actividadesServices.actividades.length+1,
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
    this._actividadesServices.addActividad(actividad);
    this.router.navigate([''])
    this._toastServices.info(`Tu valor a cancelar es $${precio}`, "Enhorabuena");

  }
}