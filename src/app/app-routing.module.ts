//Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { InicioComponentComponent} from './components/inicio-component/inicio-component.component';
import { ActividadesPageComponent } from './components/actividades-page/actividades-page.component';
import { LoginComponent } from './componentes/login/login.component';

const routes: Routes = [
  { path: '',                 redirectTo: 'home', pathMatch: 'full'},
  { path: 'home',             component: InicioComponentComponent },
  { path: 'actividades',      component: ActividadesPageComponent },
  { path: 'Login',            component: LoginComponent },
  { path: '**',               redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
