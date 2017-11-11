import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UsersProvider } from "../../providers/users/users";

@Component({
  selector: 'page-hacerrutina',
  templateUrl: 'hacerrutina.html',
  providers: [UsersProvider]
})
export class HacerrutinaPage {
/*
  {
    title: "Pecho!",
    description: "Hacer este ejercicio de pecho",
    image: "http://www.upv.es/adep/imagenes/pec1.gif",
  },
  {
    title: "Pierna!",
    description: "Hacer este ejercicio de pierna",
    image: "http://www.upv.es/adep/imagenes/cua4.gif"
  },
  {
    title: "Hombro!",
    description: "Hacer este ejrcicio de hombro",
    image: "http://www.upv.es/adep/imagenes/del1.gif"
  }
  */
  slides:any[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private userService:UsersProvider) {
    this.getData();
  }

  getData(){
    this.userService.getUsers().subscribe(data => this.slides = data);
  }

  postear(){
    this.userService.postData().subscribe();
  }

}
