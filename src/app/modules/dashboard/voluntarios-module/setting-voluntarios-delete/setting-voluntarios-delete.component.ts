import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IVoluntarios } from 'src/app/interfaces/ivoluntarios';
import { VoluntariosService } from 'src/app/services/voluntarios-service.service';
@Component({
  selector: 'app-setting-voluntarios-delete',
  templateUrl: './setting-voluntarios-delete.component.html',
  styleUrls: ['./setting-voluntarios-delete.component.css']
})
export class SettingVoluntariosDeleteComponent {
  constructor(
    private dialogRef: MatDialogRef<SettingVoluntariosDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IVoluntarios,
    private _voluntariosService: VoluntariosService
  ) { }

  delete(){
    this._voluntariosService.deleteVoluntarios(this.data.id_voluntarios);
    this.dialogRef.close("eliminado")
  }
}
