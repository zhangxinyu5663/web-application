import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import {filter,map} from 'rxjs/operators';

@Component({
  selector: 'app-tongbudetail',
  templateUrl: './tongbudetail.component.html',
  styleUrls: ['./tongbudetail.component.css']
})
export class TongbudetailComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute) { }
  courseId:number;
  cor;

  // flag:boolean=false;
  // num=1;

  // date=new Date();
  // jsonObject = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2]}};

  // change(event){
  //   this.num=event.target.value;
  // }
  fun(i){
    var a=document.getElementById('a'+i);
    a.style.borderTop="2px solid #ff6e3d";
    a.style.borderLeft="1px solid #d3d3d3";
    a.style.borderRight="1px solid #d3d3d3";
    a.style.backgroundColor="white";
    var temp;
    for(var j=1;j<=4;j++){
      if(i!=j){
        temp=document.getElementById('a'+j);
        temp.style.border="none";
        temp.style.backgroundColor=""
      }
    }
  }
  ngOnInit() {
    this.courseId=this.router.snapshot.params['courseId'];  //拿到传的参数
    this.http.get('/api/tongbu1/'+this.courseId).subscribe(data=>{
      this.cor=data;
    });
  }

    //RxJs
  // this.courseId=this.router.snapshot.params['courseId'];  //拿到传的参数
  // this.http.get('/api/courses/'+this.courseId).pipe(map(data=>{
  //   data.name='haha';
  //   return data;   //在数据返回之前对数据做一些处理
  // })).pipe(filter(data=>{
  //   return data.id==3;  //过滤 比如说只得到id=3的数据
  // })).subscribe(data=>{
  //   console.log(data);
  //   this.cor=data;
  // });
}

