import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ISolicitudV } from 'src/app/interfaces/ivoluntarios';
import { SolicitudVolunServicesService } from 'src/app/services/solicitud-volun-services.service';
import { ToastService } from 'src/app/services/toast.service';
import { SettingSolicitudVEditComponent } from '../setting-solicitud-v-edit/setting-solicitud-v-edit.component';
import { SettingSolicitudVInfoComponent } from '../setting-solicitud-v-info/setting-solicitud-v-info.component';
import { IsActiveMatchOptions } from '@angular/router';
import { SettingSolicitudVDeleteComponent } from '../setting-solicitud-v-delete/setting-solicitud-v-delete.component';


@Component({
  selector: 'app-setting-solicitud-v-default',
  templateUrl: './setting-solicitud-v-default.component.html',
  styleUrls: ['./setting-solicitud-v-default.component.css']
})
export class SettingSolicitudVDefaultComponent implements OnInit{
  displayedColumns: string[] = ['nombres', 'apellidos', 'cedula', 'edad','telefono','experiencia','motivacion','estado','accion'];
  dataSource = new MatTableDataSource<ISolicitudV>();
  loading: boolean = false;  

  constructor(
    private _solicitudService: SolicitudVolunServicesService,
    public dialog: MatDialog,
    private toast: ToastService
  ) { }

  ngOnInit(): void {
    this.obtenerSolicitud();
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  
  obtenerSolicitud(){
    this.loading = true;
    this.dataSource.data = this._solicitudService.getSolicitudes();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    if(this.dataSource.data.length > 0){
      this.paginator._intl.itemsPerPageLabel = "Items por Página ";
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  } 

  openEdit(actividadData: ISolicitudV){
     this.dialog.open(SettingSolicitudVEditComponent,{
      autoFocus: false,
      disableClose: true,
      width: 'auto',
      data: actividadData
    }).afterClosed().subscribe(
      (data) => {
        if(data == "actualizado"){
          this.obtenerSolicitud();
          this.toast.info("Actualizado exitosamente","Enhorabuena")
          return
        }
      }
    )
  }

  openDelete(actividadData: ISolicitudV){
     this.dialog.open(SettingSolicitudVDeleteComponent,{
      width: '20%',
      data: actividadData
    }).afterClosed().subscribe(
      (data) => {
        if(data == "eliminado"){
          this.obtenerSolicitud();
          this.toast.warning("Eliminación exitosamente","Enhorabuena")
          return
        }
      }
    ) 
  }

  openInfo(actividadData: ISolicitudV){
     this.dialog.open(SettingSolicitudVInfoComponent,{
      width: 'auto',
      data: actividadData      
     }) 
  }
  
}
