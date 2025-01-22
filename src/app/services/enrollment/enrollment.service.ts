import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/models/api-response';
import { Course } from 'src/app/models/course';
import { Enrollment } from 'src/app/models/enrollment';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  constructor(private http: HttpClient) { }
  addEnrollment(data: Enrollment) {
    return this.http.post(`${environment.basUrl}/enrollments/add`, data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept-Language': 'ar',
        'authorization': `bearer ${localStorage.getItem('token')}`
      }),
    })
  }
  getEnrollmentStatuses(): Observable<number[]> {
    return this.http.get<number[]>(`${environment.basUrl}/enrollments/status`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept-Language': 'ar',
        'authorization': `bearer ${localStorage.getItem('token')}`
      }),
    });
  }
  getStudentCourses() {
    return this.http.get(`${environment.basUrl}/enrollments/student`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept-Language': 'ar',
        'authorization': `bearer ${localStorage.getItem('token')}`
      }),
    });
  }
}
