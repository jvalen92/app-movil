import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HacerrutinaPage } from "../hacerrutina/hacerrutina";

@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {
  ejercicio:any =  HacerrutinaPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


}
