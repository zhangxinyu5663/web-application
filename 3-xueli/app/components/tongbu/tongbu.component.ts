import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-tongbu',
  templateUrl: './tongbu.component.html',
  styleUrls: ['./tongbu.component.css']
})
export class TongbuComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router,private http:HttpClient) { }

  // cId:number;
  // Id:number;

  courses;
  ngOnInit(){
    this.http.get('/api/tongbu1').subscribe(data=>{
      this.courses=data;
    })
  }

  //ngOnInit() {
    //如果用不到js跳转 下面两种效果一样
    //this.cId=this.route.snapshot.params['courseId'];
    // this.route.params.subscribe((params)=>{
    //   this.cId=params["courseId"];
    // });
  //}
 // go(){
    //this.router.navigate(['/shequ']);  //点击按钮，跳转到社区
    //this.router.navigate(['/tongbu',600]); //若用参数订阅模式，则页面中显示的cId会改变
  //   this.router.navigate(['/tongbu',600],{queryParams:{id:1000}}); 
  // }

}
