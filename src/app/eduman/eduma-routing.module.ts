import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeonemainComponent } from './homeone/homeonemain/homeonemain.component';
import { CourseonemainComponent } from './course/courseone/courseonemain/courseonemain.component';
import { HeroComponent } from './homeone/hero/hero.component';
import { AdminHomeComponent } from './homeone/admin-home/admin-home.component';
import { CoursedetailsmainComponent } from './coursedetails/coursedetailsmain/coursedetailsmain.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { DisplayvideoComponent } from './coursedetails/displayvideo/displayvideo.component';
import { SigninmainComponent } from './credentials/signinmain/signinmain.component';
import { ExamsComponent } from './exam/exams/exams.component';
import { ExamDetailsComponent } from './exam/exam-details/exam-details.component';
import { FinishExamComponent } from './exam/finish-exam/finish-exam.component';
import { StudentExamsComponent } from './exam/student-exams/student-exams.component';
import { ExamAnswerComponent } from './exam/exam-answer/exam-answer.component';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent,
    children: [
      { path: '', component: HomeonemainComponent },
      { path: 'course', component: CourseonemainComponent },
      { path: 'course-details/:id', component: CoursedetailsmainComponent },
      { path: 'course-details/:id/exam', component: ExamsComponent },
      // { path: 'corse-details/:id/exam/:id/students', component: ExamDetailsComponent },
      { path: 'exam/:id', component: ExamDetailsComponent },
      { path: 'exam-answer/:id', component: ExamAnswerComponent },
      { path: 'exam/:id/finish', component: FinishExamComponent },
      { path: 'student/exams', component: StudentExamsComponent },
      { path: 'course-details/:id/lesson/:video_url', component: DisplayvideoComponent },
      { path: 'login', component: SigninmainComponent },


    ],
  },
  // {
  //   path: 'admin', component: AdminHomeComponent,
  //   // children: [
  //   //   { path: '', component: AdminHomeComponent },
  //   //   { path: 'teacher-courses', component: CourseonemainComponent },
  //   // ],
  // },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EdumaRoutingModule { }
