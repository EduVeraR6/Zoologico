//Modules
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { LayoutModule } from '@angular/cdk/layout';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './shared/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Components
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './layouts/footer/footer.component';
import { LoginComponent } from './modules/authentication/login/login.component';
import { NavComponentComponent } from './layouts/nav-component/nav-component.component';
import { InicioComponentComponent } from './components/inicio-component/inicio-component.component';
import { ActividadesPageComponent } from './components/actividades-page/actividades-page.component';
import { AdministratorModuleComponent } from './modules/dashboard/administrator-module/administrator-module.component';
import { CarouselActividadesPageComponent } from './layouts/carousel-actividades-page/carousel-actividades-page.component';
import { ActividadesMatutinasLayoutsComponent } from './layouts/actividades-matutinas-layouts/actividades-matutinas-layouts.component';
import { ActividadesVespertinasLayoutsComponent } from './layouts/actividades-vespertinas-layouts/actividades-vespertinas-layouts.component';
import { VoluntariosComponentComponent } from './components/voluntarios-component/voluntarios-component.component';
import { RegistrarVoluntariosComponent } from './components/registrar-voluntarios/registrar-voluntarios.component';
import { NosotrosComponentComponent } from './components/nosotros-component/nosotros-component.component';
import { AnimalesPageComponent } from './components/animales-page/animales-page.component';
import { CarouselAnimalesPageComponent } from './layouts/carousel-animales-page/carousel-animales-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponentComponent,
    FooterComponent,
    InicioComponentComponent,
    ActividadesPageComponent,
    CarouselActividadesPageComponent,
    LoginComponent,
    ActividadesPageComponent,
    ActividadesMatutinasLayoutsComponent,
    ActividadesVespertinasLayoutsComponent,
    AdministratorModuleComponent,
    VoluntariosComponentComponent,
    RegistrarVoluntariosComponent,
    NosotrosComponentComponent,
    AnimalesPageComponent,
    CarouselAnimalesPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    LayoutModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
