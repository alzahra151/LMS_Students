import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassesServicesService {
  private apiUrl = 'https://api.example.com';
  constructor(private http:HttpClient) { }
  getAllClasse(){
    return this.http.get("")
  }
}
