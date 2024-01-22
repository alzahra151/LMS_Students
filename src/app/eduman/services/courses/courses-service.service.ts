import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CoursesServiceService {

  constructor(private http:HttpClient) { }
  getAllCousres(){
    return this.http.get("test")
  }
  getCousreById(id:any){
    return this.http.get("test")
  }
  addCourse(payload:any){
    return this.http.post('test',{payload})
  }
  upadateCourse(payload:any){
    return this.http.post('test',{payload})
  }
  deleteCourse(payload:any){
    return this.http.post('test',{payload})
  }
}
