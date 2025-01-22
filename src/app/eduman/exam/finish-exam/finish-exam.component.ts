import { Location, PlatformLocation } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-finish-exam',
  templateUrl: './finish-exam.component.html',
  styleUrls: ['./finish-exam.component.scss']
})
export class FinishExamComponent {
  constructor(
    private location: Location,
    private platformLocation: PlatformLocation
  ) {
    this.disableBackButton();
  }
  disableBackButton() {
    history.pushState(null, '', location.href);
    this.platformLocation.onPopState(() => {
      history.pushState(null, '', location.href)
    })
  }
}
