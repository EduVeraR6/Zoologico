//Modules
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './shared/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
<<<<<<< HEAD
import { NavComponentComponent } from './componentes/nav-component/nav-component.component';
import { MaterialModule } from './material/material.module';
import { FooterComponent } from './componentes/footer/footer.component';
import { InicioComponentComponent } from './componentes/inicio-component/inicio-component.component';
import { LoginComponent } from './componentes/login/login.component';
=======

//Components
import { AppComponent } from './app.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { NavComponentComponent } from './layouts/nav-component/nav-component.component';
import { InicioComponentComponent } from './components/inicio-component/inicio-component.component';
import { ActividadesPageComponent } from './components/actividades-page/actividades-page.component';
>>>>>>> 3f13587ae01a56e93608362e3d249a606fb0745f

@NgModule({
  declarations: [
    AppComponent,
    NavComponentComponent,
    FooterComponent,
    InicioComponentComponent,
<<<<<<< HEAD
    LoginComponent
=======
    ActividadesPageComponent
>>>>>>> 3f13587ae01a56e93608362e3d249a606fb0745f
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
