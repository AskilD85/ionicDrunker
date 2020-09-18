import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Articles } from '../models/articles';
import { LaravelapiService } from './../services/laravelapi.service';



@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],

})


export class Tab3Page implements OnInit{
  data: Observable<any>;
  constructor(private http: HttpClient, private laravelapi: LaravelapiService) { }

  articles: Articles[];
  searchStr = '';
  tableMode: boolean = true;
  product: Articles = new Articles();
  private url = "http://localhost:8000/api/articles"; //Vc1U67WnqiQRJ621coEmGvMbYmlA6XhqS4GXXQRcFHF6xOk7ro4bOtIoWksx
  //private url = "http://laravel5.master702.ru/api/articles"; //hDtgVCRcHyohijwvuFCSLRPv1LnZ2fTFZYZ0v1vA9rLETC9rYGmPusIk3Qvm
  headers = new HttpHeaders ({
    'Authorization':'Bearer Vc1U67WnqiQRJ621coEmGvMbYmlA6XhqS4GXXQRcFHF6xOk7ro4bOtIoWksx',
    'Content-Type':'application/json'
  });
  
ngOnInit() {
  this.getProducts();
}
  getProducts() {
     this.data = this.http.get(this.url, {headers: this.headers}); // .subscribe((data:Articles[])=>this.articles = data);
     console.log(JSON.stringify(this.data))
  }
  delete(id) {
    console.log(id);
    this.data = this.http.delete(this.url+'/'+id, {headers:this.headers}); //.subscribe((data:Articles[])=>this.articles = data);
  }


  click(){
    this.laravelapi.getRandomImg();
  }
}
