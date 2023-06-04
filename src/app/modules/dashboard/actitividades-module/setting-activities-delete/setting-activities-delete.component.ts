import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IActividad } from 'src/app/interfaces/iactividad';
import { ActividadServiceService } from 'src/app/services/actividad-service.service';

@Component({
  selector: 'app-setting-activities-delete',
  templateUrl: './setting-activities-delete.component.html',
  styleUrls: ['./setting-activities-delete.component.css']
})
export class SettingActivitiesDeleteComponent {

  constructor(
    private dialogRef: MatDialogRef<SettingActivitiesDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IActividad,
    private _actividadService: ActividadServiceService
  ) { }

  delete(){
    this._actividadService.deleteActividad(this.data.id_actividad);
    this.dialogRef.close("eliminado")
  }
}
