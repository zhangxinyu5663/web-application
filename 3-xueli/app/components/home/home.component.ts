import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http';  //子组件引入HTTP服务

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http:HttpClient) { }

  //timer=null;
  course;
  headers=new HttpHeaders({});
  ngOnInit() {
    // this.timer=setInterval(function(){
    //   console.log(11);
    // },1000)

    // this.http.get('/api/courses/1').subscribe((data)=>{
    //   this.course=data;
    //   console.log(data);
    // })
    // this.http.post('/api',{name:"zhangxinyu",pwd:123456},{headers:this.headers}).subscribe((data)=>{
    //   console.log(data);
    // })
  }
  fun(i){
    var l=document.getElementById('l'+i);
    l.style.backgroundColor="#FFDEAD";
    var temp;
    for(var j=1;j<=5;j++){
      if(j!=i){
        temp=document.getElementById('l'+j);
        temp.style.backgroundColor="white";
      }
    }
  }
  ngOnDestroy(): void {
    //clearInterval(this.timer);
  }
}
