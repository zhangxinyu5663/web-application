import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { APage } from '../a/a';
import { BPage } from '../b/b';
import { AddPage } from '../add/add';
import { NavController, ModalController } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = APage;
  // tab5Root = 'BPage';
  // tab5Root = BPage;
  constructor(public navCtrl: NavController,public modalCtrl: ModalController) {

  }
  ionViewDidLoad(){
    document.querySelector('#tab-t0-2').addEventListener('click',()=>{
      let profileModal = this.modalCtrl.create(AddPage);
      profileModal.present();
    },false);
  }
}
