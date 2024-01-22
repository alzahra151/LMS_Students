import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-headerthree',
  templateUrl: './headerthree.component.html',
  styleUrls: ['./headerthree.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderthreeComponent implements OnInit {
  //cart sidebar activation start
  sidebarCartActive: boolean = false;
  cartclick() {
    if (this.sidebarCartActive == false) {
      this.sidebarCartActive = true;
      this.sidebarInfoActive = false;
    } else {
      this.sidebarCartActive = false;
    }
  }
  //cart sidebar activation end

  //sidebar info click activation start
  sidebarInfoActive: boolean = false;
  infoclick() {
    if (this.sidebarInfoActive == false) {
      this.sidebarCartActive = false;
      this.sidebarInfoActive = true;
    } else {
      this.sidebarInfoActive = false;
    }
  }
  //sidebar info click activation end

  //sticky header activation
  isSticky: boolean = false;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 40;
  }

  constructor() {}

  ngOnInit(): void {}
}
