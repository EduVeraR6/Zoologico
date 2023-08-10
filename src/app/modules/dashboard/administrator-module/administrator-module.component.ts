import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { IUsuario } from 'src/app/interfaces/iusuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administrator-module',
  templateUrl: './administrator-module.component.html',
  styleUrls: ['./administrator-module.component.css']
})
export class AdministratorModuleComponent {
  usuarioLogeado!: IUsuario ;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router
    ) {
<<<<<<< HEAD
      //  this.usuarioLogeado = this.router.getCurrentNavigation()?.extras.state?.['data'] --->
=======
      //this.usuarioLogeado = this.router.getCurrentNavigation()?.extras.state?.['data'] 
>>>>>>> 3fde80ecef260c341721cc31401c64aaaf1d0799
    }

}
