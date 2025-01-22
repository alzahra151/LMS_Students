import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/models/api-response';
import { CourseRespone } from 'src/app/models/course';
import { Lesson, LessonRespone } from 'src/app/models/lesson';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }
  getAllCousres(): Observable<ApiResponse<CourseRespone>> {
    return this.http.get<ApiResponse<CourseRespone>>(`${environment.basUrl}/courses/courses`)
  }
  getCousreById(id: any): Observable<ApiResponse<CourseRespone>> {
    return this.http.get<ApiResponse<CourseRespone>>(`${environment.basUrl}/courses/${id}`, {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept-Language': 'ar',
            'authorization': `bearer ${localStorage.getItem('token')}`
          }),
        })
  }
  getCourseLessons(id: number) {
    return this.http.get<ApiResponse<LessonRespone>>(`${environment.basUrl}/lessons/course/${id}`)
  }
}
