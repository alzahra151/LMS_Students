import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupvideoComponent } from '../../common/popupvideo/popupvideo.component';
import { Course } from 'src/app/models/course';

@Component({
  selector: 'app-coursevideo',
  templateUrl: './coursevideo.component.html',
  styleUrls: ['./coursevideo.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CoursevideoComponent implements OnInit {
  @Input() course!: Course;
  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(PopupvideoComponent, {
      // width: '90vw',
      // maxWidth: '90vw',
    });
  }

  ngOnInit(): void { }

}
