import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IActividad } from 'src/app/interfaces/iactividad';
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
  ) {
    this.form = this.fb.group({
      nombreUsuario:        ['', Validators.required],
      telefono:             ['', Validators.required],
      cantidadPersonas:     ['', Validators.required],
      cantidadGuias:        ['', Validators.required],
      hora:                 ['', Validators.required],
      descripcion:          ['', Validators.required],
    })
  }

  enviar(){
    if(this.form.invalid){
      this._toastServices.error("Campos vacíos","Error");
      return
    }
  }
}