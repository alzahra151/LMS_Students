import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Course } from 'src/app/models/course';
import { CourseService } from 'src/app/services/course/course.service';

@Component({
  selector: 'app-coursetab',
  templateUrl: './coursetab.component.html',
  styleUrls: ['./coursetab.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CoursetabComponent implements OnInit {
  courses: Course[] = []
  constructor(private coursrService: CourseService) { }

  ngOnInit(): void {
    this.getCourses()
  }

  getCourses() {
    this.coursrService.getAllCousres().subscribe({
      next: (response) => {
        console.log(response)
        this.courses = response.result.courses
      }, error: (error) => {
        console.log(error)
      }
    })
  }

}
