//Modules
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './shared/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Components
import { AppComponent } from './app.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { NavComponentComponent } from './layouts/nav-component/nav-component.component';
import { InicioComponentComponent } from './components/inicio-component/inicio-component.component';
import { ActividadesPageComponent } from './components/actividades-page/actividades-page.component';
import { CarouselActividadesPageComponent } from './layouts/carousel-actividades-page/carousel-actividades-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponentComponent,
    FooterComponent,
    InicioComponentComponent,
    ActividadesPageComponent,
    CarouselActividadesPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
