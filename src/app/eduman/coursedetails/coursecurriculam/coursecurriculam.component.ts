import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Lesson } from 'src/app/models/lesson';
import { PopupvideoComponent } from '../../common/popupvideo/popupvideo.component';

@Component({
  selector: 'app-coursecurriculam',
  templateUrl: './coursecurriculam.component.html',
  styleUrls: ['./coursecurriculam.component.scss']
})
export class CoursecurriculamComponent implements OnInit {

  panelOpenState = false;
  @Input() lessons: Lesson[] = []
  @Input() isEnrolled = false
  constructor(public dialog: MatDialog) { }
  ngOnInit(): void { }
  openDialog(videoUrl: string | undefined, title: string | undefined, lessonId: number | undefined) {
    const dialogData = {
      videoUrl: videoUrl,
      title: title,
      lessonId: lessonId
    };
    this.dialog.open(PopupvideoComponent, {
      data: dialogData
      // width: '90vw',
      // maxWidth: '90vw',
    });
  }
}
