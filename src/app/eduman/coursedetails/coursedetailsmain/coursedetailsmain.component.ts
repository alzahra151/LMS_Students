import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/models/course';
import { Lesson } from 'src/app/models/lesson';
import { CourseService } from 'src/app/services/course/course.service';

@Component({
  selector: 'app-coursedetailsmain',
  templateUrl: './coursedetailsmain.component.html',
  styleUrls: ['./coursedetailsmain.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CoursedetailsmainComponent implements OnInit {
  writeReviewActive: boolean = false;
  isEnrolled!:boolean
  course: Course = {
    id: 0,
    title: '',
    lessons: []
  }
  lessons: Lesson[] = []
  courserId: number = 0
  writeReview() {
    if (this.writeReviewActive == false) {
      this.writeReviewActive = true;
    }
    else {
      this.writeReviewActive = false;
    }
  }
  constructor(
    private courrseService: CourseService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courserId = params['id'];
      if (this.courserId) {
        this.getCourseById();
      } else {
        console.log('id undefiund')
      }
    })
  }
  getCourseById() {
    this.courrseService.getCousreById(this.courserId).subscribe({
      next: (response) => {
        console.log(response)
        this.course = response.result.course;
        this.isEnrolled = response.result.isEnrolled
        console.log(this.course)
      }, error: (error) => {
        console.log(error)
      }
    })
  }
  getCourceLessons()  //depend on enrollment
  {
    this.courrseService.getCourseLessons(this.courserId).subscribe({
      next: (response) => {
        this.lessons = response.result.lessons;
        console.log(this.lessons)
      }, error: (error) => {
        console.log(error)
      }
    })
  }
}
