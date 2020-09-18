import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LaravelapiService {
 
  constructor(private http: HttpClient) { }



  getRandomImg() {
console.log(111)
    //return this.http.get('http://laravel6.master702.ru/api/randomimg');
  }
  
}
