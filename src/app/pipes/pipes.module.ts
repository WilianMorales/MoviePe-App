import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadmorePipe } from './readmore.pipe';



@NgModule({
  declarations: [
    ReadmorePipe
  ],
  exports:[
    ReadmorePipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
