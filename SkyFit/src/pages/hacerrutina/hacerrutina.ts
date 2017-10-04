import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-hacerrutina',
  templateUrl: 'hacerrutina.html',
})
export class HacerrutinaPage {

  slides = [
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
];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


}
