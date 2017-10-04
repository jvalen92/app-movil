import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { InicioPage } from "../inicio/inicio";
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
    inicio:any = InicioPage;
  constructor(public navCtrl: NavController, public navParams: NavParams, private loadCtrl: LoadingController) {
  }

  irAtras(){
    let loader = this.loadCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
    this.navCtrl.popToRoot();
  }



}
