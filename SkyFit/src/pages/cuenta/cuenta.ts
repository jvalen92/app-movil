import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-cuenta',
  templateUrl: 'cuenta.html',
})
export class CuentaPage {

  users: any[] = [];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  /*ionViewDidLoad(){
    this.userprovider.getUsers()
    .subscribe(
      (data) => { // Success
        this.users = data['results'];
      },
      (error) =>{
        console.log("Entre y es un error");
        console.error(error);
      }
    )
  }*/

}
