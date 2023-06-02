import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD:src/app/material/material.module.ts
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input'
=======
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
>>>>>>> 3f13587ae01a56e93608362e3d249a606fb0745f:src/app/shared/material.module.ts

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    MatToolbarModule,
<<<<<<< HEAD:src/app/material/material.module.ts
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule
  ],
  imports: [
    CommonModule
=======
    MatButtonModule
>>>>>>> 3f13587ae01a56e93608362e3d249a606fb0745f:src/app/shared/material.module.ts
  ]
})
export class MaterialModule { }
