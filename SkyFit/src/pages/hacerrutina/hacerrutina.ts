import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UsersProvider } from "../../providers/users/users";
import { TimerPage } from "../timer/timer";
import { NativeStorage } from '@ionic-native/native-storage';
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
  public timer:any = TimerPage;
  slides:any[] = [];
  private dia:string;
  private id_entrenador:string;
  private id_usuario:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private userService:UsersProvider, private nativeStorage: NativeStorage) {
    this.getData();
  }

  getData(){
    this.nativeStorage.getItem("idusuario")
    .then(
      data => {
        this.id_usuario = data.id;
        this.nativeStorage.getItem("datos")
        .then(data=> {
          this.id_entrenador = data.id;
          console.log(this.id_entrenador);
          console.log(this.id_usuario);
          this.userService.getEjercicios(this.id_usuario,this.id_entrenador).subscribe(data => this.slides = data);
        });
      });

  }



}
