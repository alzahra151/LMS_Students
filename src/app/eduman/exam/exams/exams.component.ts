import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Exam } from 'src/app/models/exam';
import { ExamService } from 'src/app/services/exam/exam.service';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.scss']
})
export class ExamsComponent {
  exams: Exam[] = []
  courseId: number = 0
  displayedColumns = ['id', 'title', 'start_date', 'end_date', 'duration',  'info'];
  constructor(private examService: ExamService,
    private route: ActivatedRoute
  ) { }
  ngOnInit() {
    this.route.params
      .subscribe(
        (params) => {
          this.courseId = +params['id'];
          console.log(this.courseId);
          this.getCourceExams(this.courseId)
        }
    );
  
  }
  getCourceExams(id: number) {
    this.examService.getCourseExams(id).subscribe({
      next: (data) => {
        this.exams = data.result.exams
        console.log(this.exams)
      }
    })
  }
}
