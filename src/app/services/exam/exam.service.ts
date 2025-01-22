import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/models/api-response';
import { examRespone } from 'src/app/models/exam';
import { StudentExamQuestion } from 'src/app/models/student-exam-question';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  constructor(private http: HttpClient) { }
  getCourseExams(courseId: number): Observable<ApiResponse<examRespone>> {
    return this.http.get<ApiResponse<examRespone>>(`${environment.basUrl}/admin/course/${courseId}/exam`)
  }
  getExamById(id: number) {
    return this.http.get<ApiResponse<examRespone>>(`${environment.basUrl}/admin/exams/${id}`)
  }
  startExam(ExamId: number) {
    return this.http.post<ApiResponse<examRespone>>(`${environment.basUrl}/student/exams/start/${ExamId}`, {}, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept-Language': 'ar',
        'authorization': `bearer ${localStorage.getItem('token')}`
      }),
    })
  }
  correctExam(examData: StudentExamQuestion) {
    return this.http.post<ApiResponse<examRespone>>(`${environment.basUrl}/student/exams/correct`, examData, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept-Language': 'ar',
        'authorization': `bearer ${localStorage.getItem('token')}`
      }),
    })
  }
  getStudentExams() {
    return this.http.get<ApiResponse<examRespone>>(`${environment.basUrl}/student/exams`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept-Language': 'ar',
        'authorization': `bearer ${localStorage.getItem('token')}`
      }),
    })
  }

}
