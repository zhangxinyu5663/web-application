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
  ionViewDidLoad(){
    //this.slides.getActiveIndex();
  }
  change(){
    console.log(this.slides.getActiveIndex());
  }
}
