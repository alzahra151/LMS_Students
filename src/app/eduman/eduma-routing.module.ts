import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeonemainComponent } from './homeone/homeonemain/homeonemain.component';
import { CourseonemainComponent } from './course/courseone/courseonemain/courseonemain.component';
import { HeroComponent } from './homeone/hero/hero.component';
import { AdminHomeComponent } from './homeone/admin-home/admin-home.component';

const routes: Routes = [
  {
    path: '', component: HomeonemainComponent,
    children: [
      { path: '', component: HeroComponent },
      { path: 'course', component: CourseonemainComponent },
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
