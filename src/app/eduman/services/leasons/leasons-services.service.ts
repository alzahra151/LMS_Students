import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LeasonsServicesService {

  constructor(private http:HttpClient) { }
  getAllLeassons(){
    return this.http.get("test")
  }
  getLeassonById(id:any){
    return this.http.get("test")
  }
  addLeasson(payload:any){
    return this.http.post('test',{payload})
  }
  upadateLeasson(payload:any){
    return this.http.post('test',{payload})
  }
  deleteLeasson(payload:any){
    return this.http.post('test',{payload})
  }
}
