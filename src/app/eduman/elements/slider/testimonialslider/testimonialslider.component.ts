import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Student } from 'src/app/models/student';
import { UserService } from 'src/app/services/user/user.service';

// import Swiper core and required modules
import SwiperCore, { Pagination, Autoplay } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, Autoplay])

@Component({
  selector: 'app-testimonialslider',
  templateUrl: './testimonialslider.component.html',
  styleUrls: ['./testimonialslider.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TestimonialsliderComponent implements OnInit {
  teachers: Student[] = []
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getTeachers()
  }
  getTeachers() {
    this.userService.getTeachers().subscribe({
      next: (response: any) => {
        this.teachers = response.result.teachers
        console.log(this.teachers)
      }, error: (error) => {
        console.log(error)
      }
    })
  }

}
