import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cchild5',
  templateUrl: './cchild5.component.html',
  styleUrls: ['./cchild5.component.css']
})
export class Cchild5Component implements OnInit {

  constructor(private http:HttpClient) { }

  tongzhi;
  ngOnInit() {
    this.http.get('/api/tongzhis').subscribe(data=>{
      this.tongzhi=data;
    })
  }

}
