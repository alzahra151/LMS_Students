import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Exam } from 'src/app/models/exam';
import { ExamService } from 'src/app/services/exam/exam.service';

@Component({
  selector: 'app-exam-answer',
  templateUrl: './exam-answer.component.html',
  styleUrls: ['./exam-answer.component.scss']
})
export class ExamAnswerComponent {
  examId: number = 0
  exam: Exam = {}
  constructor(private route: ActivatedRoute,
    private examService: ExamService
  ) { }
  ngOnInit() {
    this.route.params
      .subscribe(
        (params) => {
          this.examId = +params['id'];
          console.log(this.examId);
          this.getExamDetails(this.examId)
        }
      );
  }
  getExamDetails(id: number) {
    this.examService.getExamById(id).subscribe({
      next: (data) => {
        this.exam = data.result.exam
        console.log(this.exam)
      }
    })
  }
}
