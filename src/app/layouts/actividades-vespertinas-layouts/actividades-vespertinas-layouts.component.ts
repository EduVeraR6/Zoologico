import { Component, OnInit } from '@angular/core';
import { IActividad } from 'src/app/interfaces/iactividad';
import { ActividadServiceService } from 'src/app/services/actividad-service.service';

@Component({
  selector: 'app-actividades-vespertinas-layouts',
  templateUrl: './actividades-vespertinas-layouts.component.html',
  styleUrls: ['./actividades-vespertinas-layouts.component.css']
})
export class ActividadesVespertinasLayoutsComponent implements OnInit{
  actividades!: IActividad[];
 
  paginatedActividades: IActividad[] = [];
  pageSize = 3;
  currentPage = 0;

  constructor(private _actividadesServices: ActividadServiceService) {}

  ngOnInit() {
    this.actividades = this._actividadesServices.actividades.filter(elemento => elemento.hora.includes('P.M'));
    this.updatePaginatedActividades();
  }

  updatePaginatedActividades() {
    const startIndex = this.currentPage * this.pageSize;
    this.paginatedActividades = this.actividades.slice(startIndex, startIndex + this.pageSize);
    this.paginatedActividades[0].expanded = true;
    for (let i = 1; i < this.paginatedActividades.length; i++) {
      this.paginatedActividades[i].expanded = false;
    }
  }

  goToPage(page: number) {
    this.currentPage = page;
    this.updatePaginatedActividades();
  }

  nextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.updatePaginatedActividades();
    }
  }

  previousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.updatePaginatedActividades();
    }
  }

  get totalPages() {
    return Math.ceil(this.actividades.length / this.pageSize);
  }
}
