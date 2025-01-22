import { Component } from '@angular/core';
import { ExamService } from 'src/app/services/exam/exam.service';

@Component({
  selector: 'app-student-exams',
  templateUrl: './student-exams.component.html',
  styleUrls: ['./student-exams.component.scss']
})
export class StudentExamsComponent {
  courses: any
  exams: any
  current_date: any
  egyptTime = new Date().toLocaleString("en-EG", { timeZone: "Africa/Cairo" });

  displayedColumns = ['id', 'title', 'start_date', 'end_date', 'duration', 'info'];
  constructor(private examService: ExamService) { }
  ngOnInit() {
  
    this.getStudenExams()
  }
  getStudenExams() {
    this.examService.getStudentExams().subscribe({
      next: (res) => {
        this.exams = res.result.exams
        this.current_date = res.result.utcDate
        console.log(typeof (this.current_date))
        console.log(this.exams)
      }, error: (error) => {
        console.log(error)
      }
    })
  }
  isPast(endDate: string): boolean {
    const currentDate = new Date(this.current_date).setHours(0, 0, 0, 0); // Current date with time set to 00:00:00
    const examEndDate = new Date(endDate).setHours(0, 0, 0, 0); // Exam end date with time set to 00:00:00
    return currentDate > examEndDate;
  }
}
