import { Component, HostListener, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Exam } from 'src/app/models/exam';
import { ExamService } from 'src/app/services/exam/exam.service';
import { CountdownComponent } from 'ngx-countdown';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location, PlatformLocation } from '@angular/common';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
@Component({
  selector: 'app-exam-details',
  providers: [MatSnackBar],
  templateUrl: './exam-details.component.html',
  styleUrls: ['./exam-details.component.scss']
})
export class ExamDetailsComponent {
  @ViewChild('cd', { static: false }) private countdown!: CountdownComponent;
 
 
  examId: number = 0
  exam: Exam = {}
  duration: number = 0
  examForm!: FormGroup
  constructor(private route: ActivatedRoute,
    private examService: ExamService,
    private fb: FormBuilder,
    // private location: Location,
    private router: Router,
    private snackBar:MatSnackBar
    // private platformLocation:PlatformLocation
  ) {
    // this.disableBackButton();
    this.examForm = this.fb.group({
      questions: this.fb.array([]),  // Form array to hold answers
      exam_id: [,Validators.required]
    });
  }
  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    // Ensure no logic resets scroll position
    console.log(window.scrollY); // Debug to check scroll behavior
  }
  ngOnInit() {
    this.route.params
      .subscribe(
        (params) => {
          this.examId = +params['id'];
          console.log(this.examId);
          if (this.examId) {
            this.getExamDetails(this.examId)
            this.examForm.get('exam_id')?.patchValue(this.examId)
            this.countdown?.begin();
          }
        }
      );
  }
  get questions() {
    return (this.examForm.get('questions') as FormArray);
  }
  AnswerControl(questionIndex: number) {
    return (this.questions.at(questionIndex).get('answers') as FormArray)
  }
  setQuestions() {
    const control = <FormArray>this.examForm.controls['questions'];
    this.exam.questions?.forEach((question, index) => {
      control.push(this.fb.group({
        id: [question.id],
        answer_id: [null]
      }));

    });
  }
  getExamDetails(id: number) {
    this.examService.startExam(id).subscribe({
      next: (data) => {
        this.exam = data.result.exam
        console.log(this.exam)

        this.duration = this.exam.duration ? this.exam.duration * 60 : 0
        this.setQuestions()
      }, error: (error) => {
        console.log(error)
        this.showSuccess(error.error.message)
      }
    })
  }
    private getSnackBarConfig(panelClass: string): MatSnackBarConfig {
      return {
        // duration: duration,
        panelClass: [panelClass],
        horizontalPosition: 'center',  // Adjust as needed: 'start' | 'center' | 'end' | 'left' | 'right'
        verticalPosition: 'top'        // Adjust as needed: 'top' | 'bottom'
      };
    }
    showSuccess(message: string, duration: number = 3000) {
      const config = this.getSnackBarConfig('warning-snackbar');
      this.snackBar.open(message, 'إغلاق', config);
    }
  handleEvent(event: any) {
    console.log(event);
    if (event.action === 'done') {
      // Handle countdown completion
      console.log('done')
      this.correctExam()
    }
  }
  pauseTimer() {
    this.countdown.pause()
  }
  resumeTimer() {
    this.countdown.resume()
  }
  correctExam() {
    this.examService.correctExam(this.examForm.value).subscribe({
      next: (response) => {
        console.log(response)
        this.router.navigate([`/exam/${this.examId}/finish`]);
      }, error: (error) => {
        console.log(error)
      }
    })
  }

}
