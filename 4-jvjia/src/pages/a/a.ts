import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SetPage } from '../set/set';

/**
 * Generated class for the APage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-a',
  templateUrl: 'a.html',
})
export class APage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  isActive=1;

  ionViewDidLoad() {
    console.log('ionViewDidLoad APage');
  }
  // fun(i){
  //   for(var j=1;j<=9;j++){
  //     var lis=document.getElementById('lis'+j);
  //     if(j!=i){
  //       lis.style.backgroundColor="white";
  //     }else{
  //       lis.style.backgroundColor="#ffdb2c";
  //     }
  //   }
  // }
  isClick(i){
    this.isActive=i;
    if(i==9){
      this.navCtrl.push(SetPage);
    }
  }
}
