import { SettingActivitiesAddeditComponent } from './../setting-activities-addedit/setting-activities-addedit.component';
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IActividad } from 'src/app/interfaces/iactividad';
import { ActividadServiceService } from 'src/app/services/actividad-service.service';
import { ToastService } from 'src/app/services/toast.service';
import { SettingActivitiesInfoComponent } from '../setting-activities-info/setting-activities-info.component';
import { SettingActivitiesDeleteComponent } from '../setting-activities-delete/setting-activities-delete.component';

@Component({
  selector: 'app-setting-activities-default',
  templateUrl: './setting-activities-default.component.html',
  styleUrls: ['./setting-activities-default.component.css']
})
export class SettingActivitiesDefaultComponent {
  displayedColumns: string[] = ['nombre', 'cantidadPersonas', 'precio', 'hora', 'time', 'estado','accion'];
  dataSource = new MatTableDataSource<IActividad>();
  loading: boolean = false;  

  constructor(
    private _actividadService: ActividadServiceService,
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

  openAdd(){
    this.dialog.open(SettingActivitiesAddeditComponent,{
      autoFocus: false,
      disableClose: true,
      width: '50%',
      height: '500px'
    }).afterClosed().subscribe(
      (data) => {
        if(data == "agregado"){
          this.obtenerActividades();
          this.toast.success("Agregado exitosamente","Enhorabuena")
          return
        }
      }
    )
  }

  openEdit(actividadData: IActividad){
    this.dialog.open(SettingActivitiesAddeditComponent,{
      autoFocus: false,
      disableClose: true,
      width: '50%',
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

  openDelete(actividadData: IActividad){
    this.dialog.open(SettingActivitiesDeleteComponent,{
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

  openInfo(actividadData: IActividad){
    this.dialog.open(SettingActivitiesInfoComponent,{
      width: '50%',
      data: actividadData      
    })
  }
  
}
