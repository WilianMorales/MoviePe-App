import { Component, HostListener, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  template: `
    <div class="scroll-to-top" *ngIf="windowScrolled" [ngClass]="{'show-scrollTop' : 'windowScrolled'}">
      <a class="btn btn-transparent" data-toglle="button" aria-pressed="true">
        <img src="/assets/imgs/up.png" alt="up" aria-hidden="true" (click)="scrollToTop()">
      </a>
    </div>
  `,
  styleUrls: ['./scroll-to-top.component.scss']
})
export class ScrollToTopComponent implements OnInit {

  windowScrolled?: boolean;
  topPosToStartShowing = 100;

  constructor() { }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    
    if (scrollPosition >= this.topPosToStartShowing) {
      this.windowScrolled = true;
    } else {
      this.windowScrolled = false;
    }
  }

  scrollToTop(): void {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }

  ngOnInit(): void {
  }

}
