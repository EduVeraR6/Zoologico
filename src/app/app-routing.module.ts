import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponentComponent} from './componentes/inicio-component/inicio-component.component';

const routes: Routes = [];

@NgModule({
  imports:[
    RouterModule.forRoot([
      {path: '', component:InicioComponentComponent}
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
