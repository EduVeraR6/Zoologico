//Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { InicioComponentComponent} from './components/inicio-component/inicio-component.component';
import { ActividadesPageComponent } from './components/actividades-page/actividades-page.component';
import { LoginComponent } from './modules/authentication/login/login.component';
import { NosotrosComponentComponent } from './components/nosotros-component/nosotros-component.component';
import { AnimalesPageComponent } from './components/animales-page/animales-page.component';
import { VoluntariosComponentComponent } from './components/voluntarios-component/voluntarios-component.component';

const routes: Routes = [
  { path: '',                 redirectTo: 'home', pathMatch: 'full'},
  { path: 'home',             component: InicioComponentComponent },
  { path: 'actividades',      component: ActividadesPageComponent },
  { path: 'Login',            component: LoginComponent },
  { path: 'Animales',         component: AnimalesPageComponent },
  { path: 'Nosotros',         component: NosotrosComponentComponent },
  { path: 'Voluntarios',      component: VoluntariosComponentComponent },
  { path: '**',               redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
