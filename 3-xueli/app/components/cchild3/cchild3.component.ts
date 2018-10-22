import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cchild3',
  templateUrl: './cchild3.component.html',
  styleUrls: ['./cchild3.component.css']
})
export class Cchild3Component implements OnInit {

  constructor(public http:HttpClient) { }
  vc;
  ngOnInit() {
    this.http.get('/api/vcourse').subscribe((data)=>{
      this.vc=data;
    })
  }

}
