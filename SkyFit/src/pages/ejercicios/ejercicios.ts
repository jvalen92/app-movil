import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UsersProvider } from "../../providers/users/users";



@Component({
  selector: 'page-ejercicios',
  templateUrl: 'ejercicios.html',
})
export class EjerciciosPage {

  ejercicios:string[];
  searchQuery: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private userService:UsersProvider) {
    this.initialize();
  }

  initialize(){
    this.userService.getLista().subscribe(data => this.ejercicios = data);
  }
  getItems(ev:any){
    this.initialize();

    let val = ev.target.value;

// if the value is an empty string don't filter the items
if (val && val.trim() != '') {
this.ejercicios = this.ejercicios.filter((item) => {
  return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
})
}
  }

}
