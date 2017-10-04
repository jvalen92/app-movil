import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { LoginPage } from "../login/login";
import { SignupPage } from "../signup/signup";

@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {

  login:any = LoginPage;
  signup:any = SignupPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


}
