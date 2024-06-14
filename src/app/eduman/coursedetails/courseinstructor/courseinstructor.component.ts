import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-courseinstructor',
  templateUrl: './courseinstructor.component.html',
  styleUrls: ['./courseinstructor.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CourseinstructorComponent implements OnInit {
  @Input() instructor!: Student;
  constructor() { }

  ngOnInit(): void {
  }

}
