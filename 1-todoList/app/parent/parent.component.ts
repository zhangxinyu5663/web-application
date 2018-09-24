import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor(private local:CommonService) { }

  data1=[];
  data2=[];
  
  //按回车向正在进行列表里添加数据
  funAdd(msg){
    this.data1.push(msg);
    this.local.set('list1',this.data1);
  }

  //删除正在进行列表里的表项
  funDelete(i){
    this.data1.splice(i,1);
    this.local.set('list1',this.data1);
  }

  //点击勾选框向已完成列表里添加数据
  funAdd2(i){
    this.data2.push(this.data1[i]);
    this.data1.splice(i,1);
    this.local.set('list1',this.data1);
    this.local.set('list2',this.data2);
  }

  //点击勾选框向正在进行列表里添加数据
  funAdd3(j){
    this.data1.push(this.data2[j]);
    this.data2.splice(j,1);
    this.local.set('list1',this.data1);
    this.local.set('list2',this.data2);
  }

  //删除已完成列表里的数据
  funDelete2(j){
    this.data2.splice(j,1);
    this.local.set('list2',this.data2);
  }

  ngOnInit() {
    //localStorage.clear();

    if(this.local.get('list1')){
      this.data1=this.local.get('list1').split(',');
    }
    if(this.local.get('list2')){
      this.data2=this.local.get('list2').split(',');
    }
  }
}
