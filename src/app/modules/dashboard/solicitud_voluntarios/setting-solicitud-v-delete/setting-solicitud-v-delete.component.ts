import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ISolicitudV } from 'src/app/interfaces/ivoluntarios';
import { SolicitudVolunServicesService } from 'src/app/services/solicitud-volun-services.service';
@Component({
  selector: 'app-setting-solicitud-v-delete',
  templateUrl: './setting-solicitud-v-delete.component.html',
  styleUrls: ['./setting-solicitud-v-delete.component.css']
})
export class SettingSolicitudVDeleteComponent {
constructor(
    private dialogRef: MatDialogRef<SettingSolicitudVDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ISolicitudV,
    private _solicitudService: SolicitudVolunServicesService
  ) { }

  delete(){
    this._solicitudService.deleteActividad(this.data.id_solicitud);
    this.dialogRef.close("eliminado")
  }
}
