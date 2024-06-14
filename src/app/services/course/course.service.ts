import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/models/api-response';
import { CourseRespone } from 'src/app/models/course';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }
  getAllCousres(): Observable<ApiResponse<CourseRespone>> {
    return this.http.get<ApiResponse<CourseRespone>>(`${environment.basUrl}/admin/courses`)
  }
  getCousreById(id: any): Observable<ApiResponse<CourseRespone>> {
    return this.http.get<ApiResponse<CourseRespone>>(`${environment.basUrl}/courses/${id}`)
  }
}
