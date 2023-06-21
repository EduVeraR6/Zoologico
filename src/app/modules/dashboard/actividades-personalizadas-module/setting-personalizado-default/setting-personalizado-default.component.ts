import { SettingPersonalizadoDeleteComponent } from './../setting-personalizado-delete/setting-personalizado-delete.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IPersonalizado } from 'src/app/interfaces/iactividad';
import { ActividadPersonalizadaServicesService } from 'src/app/services/actividad-personalizada-services.service';
import { ToastService } from 'src/app/services/toast.service';
import { SettingPersonalizadoEditComponent } from '../setting-personalizado-edit/setting-personalizado-edit.component';
import { SettingPersonalizadoInfoComponent } from '../setting-personalizado-info/setting-personalizado-info.component';

@Component({
  selector: 'app-setting-personalizado-default',
  templateUrl: './setting-personalizado-default.component.html',
  styleUrls: ['./setting-personalizado-default.component.css']
})
export class SettingPersonalizadoDefaultComponent implements OnInit{
  displayedColumns: string[] = ['nombreUsuario', 'cantidadPersonas', 'hora', 'fecha','estado','accion'];
  dataSource = new MatTableDataSource<IPersonalizado>();
  loading: boolean = false;  

  constructor(
    private _actividadService: ActividadPersonalizadaServicesService,
    public dialog: MatDialog,
    private toast: ToastService
  ) { }

  ngOnInit(): void {
    this.obtenerActividades();
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  
  obtenerActividades(){
    this.loading = true;
    this.dataSource.data = this._actividadService.getActividades();
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

  openEdit(actividadData: IPersonalizado){
     this.dialog.open(SettingPersonalizadoEditComponent,{
      autoFocus: false,
      disableClose: true,
      width: 'auto',
      data: actividadData
    }).afterClosed().subscribe(
      (data) => {
        if(data == "actualizado"){
          this.obtenerActividades();
          this.toast.info("Actualizado exitosamente","Enhorabuena")
          return
        }
      }
    )
  }

  openDelete(actividadData: IPersonalizado){
     this.dialog.open(SettingPersonalizadoDeleteComponent,{
      width: '20%',
      data: actividadData
    }).afterClosed().subscribe(
      (data) => {
        if(data == "eliminado"){
          this.obtenerActividades();
          this.toast.warning("Eliminación exitosamente","Enhorabuena")
          return
        }
      }
    ) 
  }

  openInfo(actividadData: IPersonalizado){
     this.dialog.open(SettingPersonalizadoInfoComponent,{
      width: 'auto',
      data: actividadData      
     }) 
  }
  
}
