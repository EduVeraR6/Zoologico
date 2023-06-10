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
import { AdministratorModuleComponent } from './modules/dashboard/administrator-module/administrator-module.component';
import { SettingActivitiesDefaultComponent } from './modules/dashboard/actitividades-module/setting-activities-default/setting-activities-default.component';
import { SettingActivitiesUsersComponent } from './modules/dashboard/actitividades-module/setting-activities-users/setting-activities-users.component';
import { SettingAnimalesDefaultComponent } from './modules/dashboard/animales-module/setting-animales-default/setting-animales-default.component';
import { SettingVoluntariosDefaultComponent } from './modules/dashboard/voluntarios-module/setting-voluntarios-default/setting-voluntarios-default.component';

const routes: Routes = [
  { path: '',                 redirectTo: 'home', pathMatch: 'full'},
  { path: 'home',             component: InicioComponentComponent },
  { path: 'actividades',      component: ActividadesPageComponent },
  { path: 'Login',            component: LoginComponent },
  { path: 'Animales',         component: AnimalesPageComponent },
  { path: 'Nosotros',         component: NosotrosComponentComponent },
  { path: 'Voluntarios',      component: VoluntariosComponentComponent },
  { path: 'administrator',    component:  AdministratorModuleComponent,
    children: [
      { path: 'default-activities',             component: SettingActivitiesDefaultComponent },
      { path: 'default-animales',             component: SettingAnimalesDefaultComponent},
      { path: 'users-activities',               component: SettingActivitiesUsersComponent },
      { path: 'default-voluntarios',               component: SettingVoluntariosDefaultComponent }
    ]
  },
  { path: '**',               redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
