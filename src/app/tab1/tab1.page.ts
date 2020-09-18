import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface Url {
  id:string;
  url:string;
}
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  data: Url;
  constructor(private http: HttpClient) {}
  randompicture = '\/\/im0-tub-ru.yandex.net\/i?id=62117d74b9e49acfb40773c4b98aa30a&n=13';
  private url = 'http://laravel5.master702.ru/api/randomimg';
  headers = new HttpHeaders({
    'Authorization':'Bearer mNr2wzi7HuWx3uDImmCsedSj21Wmmp7jKbVVIT4VUor8J9qy4BS1f9CIEDki',
    'Content-type': 'aplication/json',
    'Accept':'aplication/json'
  });
ngOnInit() {
  this.randomdrunker();
}



randomdrunker() {
  console.log('casc')
  this.http.get(this.url).subscribe((data:Url)=>this.data = data);
  
  //this.data = {url:this.randompicture}
  console.log('2data ', this.data)
}


}
