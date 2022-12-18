import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SlideShowComponent } from './components/slide-show/slide-show.component';
import { SwiperModule } from 'swiper/angular';
import { PipesModule } from '@pipes/pipes.module';
import { RouterModule } from '@angular/router';
import { MovieCardGridComponent } from './components/movie-card-grid/movie-card-grid.component';
import { RatingModule } from 'ng-starrating';
import { CreditsSlideshowComponent } from './components/credits-slideshow/credits-slideshow.component';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
import { ModalTrailerComponent } from './components/modal-trailer/modal-trailer.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SlideShowComponent,
    MovieCardGridComponent,
    CreditsSlideshowComponent,
    ScrollToTopComponent,
    ModalTrailerComponent
  ],
  exports: [
    NavbarComponent,
    SlideShowComponent,
    MovieCardGridComponent,
    CreditsSlideshowComponent,
    ScrollToTopComponent,
    ModalTrailerComponent
  ],
  imports: [
    CommonModule,
    SwiperModule,
    PipesModule,
    RouterModule,
    RatingModule
  ]
})
export class SharedModule { }
