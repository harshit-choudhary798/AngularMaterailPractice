import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Import MatButtonModule from '@angular/material/button'
import { MatButtonModule } from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';

const MaterialComponents=[
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule
  ],
  exports:[
    MaterialComponents
  ]
})
export class MaterialModule { }
