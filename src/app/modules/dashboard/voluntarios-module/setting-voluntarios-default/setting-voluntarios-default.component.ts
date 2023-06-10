import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IVoluntarios } from 'src/app/interfaces/ivoluntarios';
import { VoluntariosService } from 'src/app/services/voluntarios-service.service';
import { ToastService } from 'src/app/services/toast.service';
import { SettingVoluntariosAddeditComponent } from '../setting-voluntarios-addedit/setting-voluntarios-addedit.component';
import { SettingVoluntariosDeleteComponent } from '../setting-voluntarios-delete/setting-voluntarios-delete.component';
import { SettingVoluntariosInfoComponent } from '../setting-voluntarios-info/setting-voluntarios-info.component';

@Component({
  selector: 'app-setting-voluntarios-default',
  templateUrl: './setting-voluntarios-default.component.html',
  styleUrls: ['./setting-voluntarios-default.component.css']
})
export class SettingVoluntariosDefaultComponent {
  displayedColumns: string[] = ['nombres', 'apellidos', 'cedula', 'edad', 'telefono', 'experiencia','motivacion','estado','accion'];
  dataSource = new MatTableDataSource<IVoluntarios>();
  loading: boolean = false;  

  constructor(
    private _voluntariosService: VoluntariosService,
    public dialog: MatDialog,
    private toast: ToastService
  ) { }
  
  ngOnInit(): void {
    this.obtenerVoluntarios();
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  //Truncar Texto -- Animales
  truncateText(text: string, maxLength: number): string {
    if (text && text.length > maxLength) {
      return `${text.substring(0, maxLength)}...`;
    }
    return text;
  }
  obtenerVoluntarios(){
    this.loading = true;
    this.dataSource.data = this._voluntariosService.getVolutarios();
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
    this.dialog.open(SettingVoluntariosAddeditComponent,{
      autoFocus: false,
      disableClose: true,
      width: '50%',
      height: '500px'
    }).afterClosed().subscribe(
      (data) => {
        if(data == "agregado"){
          this.obtenerVoluntarios();
          this.toast.success("Agregado exitosamente","Enhorabuena")
          return
        }
      }
    )
  }

  
  openEdit(voluntariosData: IVoluntarios){
    this.dialog.open(SettingVoluntariosAddeditComponent,{
      autoFocus: false,
      disableClose: true,
      width: '50%',
      data: voluntariosData
    }).afterClosed().subscribe(
      (data) => {
        if(data == "actualizado"){
          this.obtenerVoluntarios();
          this.toast.info("Actualizado exitosamente","Enhorabuena")
          return
        }
      }
    )
  }

  
  openDelete(voluntariosData: IVoluntarios){
    this.dialog.open(SettingVoluntariosDeleteComponent,{
      width: '20%',
      data: voluntariosData
    }).afterClosed().subscribe(
      (data) => {
        if(data == "eliminado"){
          this.obtenerVoluntarios();
          this.toast.warning("Eliminación exitosamente","Enhorabuena")
          return
        }
      }
    )
  }


  openInfo(voluntariossData: IVoluntarios){
    this.dialog.open(SettingVoluntariosInfoComponent,{
      width: '100%',
      data: voluntariossData     
    })
  }
}
