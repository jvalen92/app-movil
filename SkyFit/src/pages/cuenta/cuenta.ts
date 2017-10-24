import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UsersProvider } from "../../providers/users/users";

@Component({
  selector: 'page-cuenta',
  templateUrl: 'cuenta.html',
})
export class CuentaPage {

  users:any[] = [];


  constructor(public navCtrl: NavController, public navParams: NavParams, private userService: UsersProvider) {
    this.getData();
  }

  getData(){
    this.userService.getUsers().subscribe(data => this.users = data['results']);
  }

}
