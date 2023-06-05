import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { LoginService } from 'src/app/services/login.service';
import { ToastService } from 'src/app/services/toast.service';


@Component({
  selector: 'app-administrator-module',
  templateUrl: './administrator-module.component.html',
  styleUrls: ['./administrator-module.component.css']
})
export class AdministratorModuleComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(public _loginService: LoginService, private breakpointObserver: BreakpointObserver) {}

}
