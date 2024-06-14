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

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent,
    children: [
      { path: '', component: HomeonemainComponent },
      { path: 'course', component: CourseonemainComponent },
      { path: 'course-details/:id', component: CoursedetailsmainComponent },
      { path: 'course-details/:id/lesson/:video_url', component: DisplayvideoComponent },

    ],
  },
  {
    path: 'admin', component: AdminHomeComponent,
    // children: [
    //   { path: '', component: AdminHomeComponent },
    //   { path: 'teacher-courses', component: CourseonemainComponent },
    // ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EdumaRoutingModule { }
