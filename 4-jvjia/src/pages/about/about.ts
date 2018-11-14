import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Slides } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  @ViewChild(Slides) slides:Slides; //修饰器 使用ViewChild将Slides实例分配给您的slides属性
  constructor(public navCtrl: NavController) {
  
  }
  array=['客厅','卧室','餐厅','书房','门厅'];
  flag=0;
  ionViewDidLoad(){
    //this.slides.getActiveIndex();
  }
  change(){
    console.log(this.slides.getActiveIndex());
  }
  fun(i){
    this.flag=i;
  }
}
