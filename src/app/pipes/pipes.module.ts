import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadmorePipe } from './readmore.pipe';
import { NoimagePipe } from './noimage.pipe';
import { NoposterimagePipe } from './noposterimage.pipe';
import { SafePipe } from './safe.pipe';



@NgModule({
  declarations: [
    ReadmorePipe,
    NoimagePipe,
    NoposterimagePipe,
    SafePipe
  ],
  exports:[
    ReadmorePipe,
    NoimagePipe,
    NoposterimagePipe,
    SafePipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
