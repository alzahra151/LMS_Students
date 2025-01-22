import { Component, ViewEncapsulation } from '@angular/core';
import { Course } from 'src/app/models/course';
import { Exam } from 'src/app/models/exam';
import { EnrollmentService } from 'src/app/services/enrollment/enrollment.service';
import { ExamService } from 'src/app/services/exam/exam.service';

@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainmenuComponent {
  courses: any
  exams:any
  constructor(private enrollmentService: EnrollmentService,private examService:ExamService) { }
  ngOnInit() {
    this.getStudenCourses()
    // this.getStudenExams()
  }

  getStudenCourses() {
    this.enrollmentService.getStudentCourses().subscribe({
      next: (res) => {
        this.courses = res
        console.log(res)
      }, error: (error) => {
        console.log(error)
      }
    })
  } 
  getStudenExams() {
    this.examService.getStudentExams().subscribe({
      next: (res) => {
        this.exams = res.result.exams
        console.log(this.exams)
      }, error: (error) => {
        console.log(error)
      }
    })
  } 
}
