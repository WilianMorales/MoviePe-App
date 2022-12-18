import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadmorePipe } from './readmore.pipe';
import { NoimagePipe } from './noimage.pipe';
import { SafePipe } from './safe.pipe';



@NgModule({
  declarations: [
    ReadmorePipe,
    NoimagePipe,
    SafePipe
  ],
  exports:[
    ReadmorePipe,
    NoimagePipe,
    SafePipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
