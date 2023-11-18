import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Import MatButtonModule from '@angular/material/button'
import { MatButtonModule } from '@angular/material/button';

const MaterialComponents=[
  MatButtonModule // Corrected import statement
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule // Corrected import statement
  ],
  exports:[
    MatButtonModule
  ]
})
export class MaterialModule { }
