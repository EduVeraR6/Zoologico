import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IAnimales } from 'src/app/interfaces/ianimales';
import { AnimalesService } from 'src/app/services/animales-service.service';

@Component({
  selector: 'app-setting-animales-delete',
  templateUrl: './setting-animales-delete.component.html',
  styleUrls: ['./setting-animales-delete.component.css']
})
export class SettingAnimalesDeleteComponent {
  constructor(
    private dialogRef: MatDialogRef<SettingAnimalesDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IAnimales,
    private _animalesService: AnimalesService
  ) { }

  delete(){
    this._animalesService.deleteAnimales(this.data.id_animales);
    this.dialogRef.close("eliminado")
  }
}
