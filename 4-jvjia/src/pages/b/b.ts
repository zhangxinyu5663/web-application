import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { AddPage } from '../add/add';

/**
 * Generated class for the BPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-b',
  templateUrl: 'b.html',
})
export class BPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
     console.log(this.navParams.data);
    //console.log(this.navParams.get('id'));
    // let profileModal = this.modalCtrl.create(AddPage);
    // profileModal.present();
  }

}
