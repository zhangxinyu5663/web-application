import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  constructor(private http:HttpClient) { }
  courses;
  ngOnInit() {
    this.http.get('/api/tongbu2').subscribe((data)=>{
      this.courses=data;
    })
  }

}
