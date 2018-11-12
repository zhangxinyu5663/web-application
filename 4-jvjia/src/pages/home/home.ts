import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BPage } from '../b/b';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage { //类里面只能声明相关属性和方法

  constructor(public navCtrl: NavController,private http:HttpClient) {  
    for (let i = 0; i < 30; i++) {
      this.items.push( this.items.length );
    }
  }
  goSub(){
    this.navCtrl.push(BPage,{id:1});
  }

  @ViewChild('ac') ac;
  icons:string="bookmark";
  items=[];
  num=1;

  ionViewDidLoad(){
    //this.ac.get();
  }

  doInfinite(infiniteScroll){
    this.http.get('/api/tongbu1').subscribe(data=>{
      console.log(data);
      infiniteScroll.complete();
    })
  //   console.log('Begin async operation');
  //   setTimeout(() => {
  //     for (let i = 0; i < 30; i++) {
  //       this.items.push( this.items.length );
  //     }

  //     console.log('Async operation has ended');
  //     infiniteScroll.complete(); //必须调用 不然加载操作不会结束 
  //     // if(this.items.length>90){
  //     //   infiniteScroll.enable(); //确定什么时候停止加载
  //     // }
  //     infiniteScroll.enable(); //只能加载一次
  //   }, 500);
   }
   doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  fun(i){
    this.num=i;
    for(var j=1;j<=4;j++){
      var li=document.getElementById('li'+j);
      if(j!=i){
        li.style.borderBottom="none";
      }else{
        li.style.borderBottom="4px solid #ffdb2c";
      }
    }
  }
}
