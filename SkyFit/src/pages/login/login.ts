import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { HomePage } from "../home/home";
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private loadCtrl:LoadingController) {
  }

  ir_home(){
    let loader = this.loadCtrl.create({
  content: "Please wait...",
  duration: 3000
});
loader.present();
    this.navCtrl.setRoot(HomePage);
  }


}
