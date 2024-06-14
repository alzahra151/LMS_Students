import { Component, Input, OnInit } from '@angular/core';
import { Lesson } from 'src/app/models/lesson';

@Component({
  selector: 'app-coursecurriculam',
  templateUrl: './coursecurriculam.component.html',
  styleUrls: ['./coursecurriculam.component.scss']
})
export class CoursecurriculamComponent implements OnInit {

  panelOpenState = false;
  @Input() lessons: Lesson[] = []
  constructor() { }
  ngOnInit(): void { }

}
