import { Component, Input } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Course } from 'src/app/models/course';
import { Enrollment } from 'src/app/models/enrollment';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CourseService } from 'src/app/services/course/course.service';
import { EnrollmentService } from 'src/app/services/enrollment/enrollment.service';
import { SocketService } from 'src/app/services/socket/socket.service';

@Component({
  selector: 'app-coursetabdetails',
  providers:[MatSnackBar],
  templateUrl: './coursetabdetails.component.html',
  styleUrls: ['./coursetabdetails.component.scss']
})
export class CoursetabdetailsComponent {
  @Input() courses!: Course[];
  enrollmentData: Enrollment = {}
  isLoggedIn = false
  enrolledStudentsCount: number = 0;
  constructor(private enrollmentService: EnrollmentService, private authService: AuthService, private router: Router,
    private toastr: ToastrService, private coursrService: CourseService, private socketService: SocketService) { }
 
  
  addEnrollment(course: Course) {
    this.authService.IsLoggedIn().subscribe({
      next: (status) => {
        this.isLoggedIn = status;
        console.log('User exists in database:', this.isLoggedIn);
        if (!status) {
          console.warn('User not authenticated. Redirecting to signin.');
          this.router.navigate(['/signin']);
          this.showSuccess();
          return;
        }
        this.enrollmentData = {
          course_id: course.id,
          teacher_id: course.teacher?.id,
          status: "pending"
        }
        this.enrollmentService.addEnrollment(this.enrollmentData).subscribe({
          next: (response) => {
            console.log('sucess', response)
            this.getCourses()
          },
          error: (error) => {
             console.log(error)
          }
        })
      }, error: (err) => {
        this.router.navigate(['/signin'])
        this.showSuccess()
      }
    });
    // if (true) {
     
    // }
    // else {
    //   this.router.navigate(['/signin'])
    //   this.showSuccess()
    // }

  }
 
  getCourses() {
    this.coursrService.getAllCousres().subscribe({
      next: (response) => {
        console.log(response)
        this.courses = response.result.courses
        this.checkEnrollmentStatuses();
      }, error: (error) => {
        console.log(error)
      }
    })
  }
  checkEnrollmentStatuses() {
    this.enrollmentService.getEnrollmentStatuses().subscribe({
      next: (enrolledCourses) => {
        console.log(enrolledCourses)
        this.courses.forEach(course => {
          course.is_enrolled = enrolledCourses.includes(course.id);
          console.log("test enn",course.is_enrolled)
        });
      },
      error: (error) => {
        console.error('Error checking enrollment statuses', error);
      }
    });
  }
  showSuccess() {
    this.toastr.info('يجب تسجيل الدخول اولا قبل ارسال الاشتراك');
  }

}
