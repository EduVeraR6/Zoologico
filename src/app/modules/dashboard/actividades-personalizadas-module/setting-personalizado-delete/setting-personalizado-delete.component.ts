import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IPersonalizado } from 'src/app/interfaces/iactividad';
import { ActividadPersonalizadaServicesService } from 'src/app/services/actividad-personalizada-services.service';

@Component({
  selector: 'app-setting-personalizado-delete',
  templateUrl: './setting-personalizado-delete.component.html',
  styleUrls: ['./setting-personalizado-delete.component.css']
})
export class SettingPersonalizadoDeleteComponent {

  constructor(
    private dialogRef: MatDialogRef<SettingPersonalizadoDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IPersonalizado,
    private _actividadService: ActividadPersonalizadaServicesService
  ) { }

  delete(){
    this._actividadService.deleteActividad(this.data.id_personalizado);
    this.dialogRef.close("eliminado")
  }
}
