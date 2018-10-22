import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(private http:HttpClient) { }

  courses;
  ngOnInit() {
    this.http.get('/api/vcourses').subscribe(data=>{
      this.courses=data;
    })
  }

}
