import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponentComponent } from './componentes/inicio-component/inicio-component.component';
import { LoginComponent } from './componentes/login/login.component';



const routes: Routes = [
  { path: '', component: InicioComponentComponent },
  { path: 'Login', component: LoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {



}
