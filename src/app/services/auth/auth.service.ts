import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, of } from 'rxjs';
import { Student } from '../../models/student';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // isLoggedInState: BehaviorSubject<Boolean>
  isAuthenticated = false;

  constructor(private http: HttpClient) { }

  login(userData: Student) {
    return this.http.post(`${environment.basUrl}/login`, userData, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept-Language': 'ar'
      }),
    }).pipe(map((response) => {
      this.isAuthenticated = true
      return response;
    }))
  }
  // IsLoggedIn() {
  //  const token= localStorage.getItem('token')  || ''
  //   const decodedToken = jwtDecode(token);
  //   console.log(decodedToken)
  //   this.http.get(`${environment.basUrl}/admin/user/${decodedToken}`).subscribe({
  //     next: (res) => {
        
  //     }
  //   })
  // }
  IsLoggedIn(): Observable<boolean> {
    const token = localStorage.getItem('token') || '';
    if (token) {
      console.log(token)
      const decodedToken = jwtDecode<any>(token);

      // Extract user ID or email from token payload
      const userId = decodedToken.id; // Replace with the actual property that represents user ID in your token

      if (!userId) {
        console.warn('Invalid token: No user ID found.');
        return of(false); // Return an observable emitting false immediately if user ID is not found
      }

      // Check if user exists in the database
      return this.http
        .get<any>(`${environment.basUrl}/admin/user/${userId}`)
        .pipe(
          map((res) => {
            // Check backend response for user existence
            console.log(res)
            return res?.result?.user ? true : false; // Adjust based on your backend response structure
          }),
          catchError((err) => {
            console.error('User validation failed:', err);
            return of(false); // Return observable emitting false if there's an error
          })
        );
    } else {
      return of(false)
    }
  }
}
