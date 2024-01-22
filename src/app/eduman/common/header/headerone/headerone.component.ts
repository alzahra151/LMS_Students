import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-headerone',
  templateUrl: './headerone.component.html',
  styleUrls: ['./headerone.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderoneComponent implements OnInit {
  //topbar hide
  noteContentActive: boolean = false;
  noteButton() {
    if (this.noteContentActive == false) {
      this.noteContentActive = true;
    } else {
      this.noteContentActive = false;
    }
  }
  //topbar hide

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

  isSticky: boolean = false;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 50;
  }

  constructor() {}

  ngOnInit(): void {}
}
