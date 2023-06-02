//Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
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
=======

//Components
import { InicioComponentComponent} from './components/inicio-component/inicio-component.component';
import { ActividadesPageComponent } from './components/actividades-page/actividades-page.component';

const routes: Routes = [
  { path: '',                 redirectTo: 'home', pathMatch: 'full'},
  { path: 'home',             component: InicioComponentComponent },
  { path: 'actividades',      component: ActividadesPageComponent },
  { path: '**',               redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
>>>>>>> 3f13587ae01a56e93608362e3d249a606fb0745f
  exports: [RouterModule]
})
export class AppRoutingModule {



}
