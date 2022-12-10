import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [
    HomeComponent,
    MovieComponent,
    SearchComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
