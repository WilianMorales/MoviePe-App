import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { Cast } from '@interfaces/credits.interfaces';

import SwiperCore  from 'swiper';


@Component({
  selector: 'app-credits-slideshow',
  templateUrl: './credits-slideshow.component.html',
  styleUrls: ['./credits-slideshow.component.scss']
})
export class CreditsSlideshowComponent implements OnInit, AfterViewInit {

  @Input() credits?: Cast[] = [];

  constructor() { }

  ngAfterViewInit(): void {
    const swiper = new SwiperCore('.swiper',{
      slidesPerView: 4.3,
      freeMode: true,
      spaceBetween: 15
    });
  }

  ngOnInit(): void {
    console.log(this.credits);
  }

}
