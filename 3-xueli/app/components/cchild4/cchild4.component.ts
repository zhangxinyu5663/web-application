import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-cchild4',
  templateUrl: './cchild4.component.html',
  styleUrls: ['./cchild4.component.css']
})
export class Cchild4Component implements OnInit {

  constructor(private http:HttpClient) { }

  qieshuo;
  ngOnInit() {
    this.http.get('/api/qieshuos').subscribe(data=>{
      this.qieshuo=data;
    })
  }

}
