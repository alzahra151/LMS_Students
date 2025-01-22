import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/models/api-response';
import { Comment, CommentResponse } from 'src/app/models/comment';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }
  getComments(lessonId: number): Observable<ApiResponse<CommentResponse>> {
    return this.http.get<ApiResponse<CommentResponse>>(`${environment.basUrl}/comments/${lessonId}`)
  }
  addComment(commentData: Comment) {
    return this.http.post(`${environment.basUrl}/comments/add`, commentData, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept-Language': 'ar',
        'authorization': `bearer ${localStorage.getItem('token')}`
      }),
    })
  }
  addReplay(replayData: Comment, commentId: number) {
    return this.http.post(`${environment.basUrl}/comments/add-replay/${commentId}`, replayData, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept-Language': 'ar',
        'authorization': `bearer ${localStorage.getItem('token')}`
      }),
    })
  }
}
