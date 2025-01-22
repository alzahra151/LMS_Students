import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Course } from 'src/app/models/course';
import { CourseService } from 'src/app/services/course/course.service';
import { EnrollmentService } from 'src/app/services/enrollment/enrollment.service';

@Component({
  selector: 'app-coursetab',
  templateUrl: './coursetab.component.html',
  styleUrls: ['./coursetab.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CoursetabComponent implements OnInit {
  courses: Course[] = []
  constructor(private coursrService: CourseService, private enrollmentService: EnrollmentService) { }

  ngOnInit(): void {
    this.getCourses()
  }

  getCourses() {
    this.coursrService.getAllCousres().subscribe({
      next: (response) => {
        console.log(response)
        this.courses = response.result.courses
        this.checkEnrollmentStatuses();
      }, error: (error) => {
        console.log(error)
      }
    })
  }
  checkEnrollmentStatuses() {
    this.enrollmentService.getEnrollmentStatuses().subscribe({
      next: (enrolledCourses) => {
        console.log(enrolledCourses)
        this.courses.forEach(course => {
          course.is_enrolled = enrolledCourses.includes(course.id);
          console.log(course.is_enrolled)
        });
      },
      error: (error) => {
        console.error('Error checking enrollment statuses', error);
      }
    });
  }

}
