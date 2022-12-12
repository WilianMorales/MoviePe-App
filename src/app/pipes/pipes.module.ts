import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadmorePipe } from './readmore.pipe';
import { NoimagePipe } from './noimage.pipe';



@NgModule({
  declarations: [
    ReadmorePipe,
    NoimagePipe
  ],
  exports:[
    ReadmorePipe,
    NoimagePipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
