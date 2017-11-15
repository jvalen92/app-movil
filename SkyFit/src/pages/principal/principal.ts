import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { HacerrutinaPage } from "../hacerrutina/hacerrutina";
import { UsersProvider } from "../../providers/users/users";
import { NativeStorage } from '@ionic-native/native-storage';

@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

dias:string;
rutinapage:HacerrutinaPage;
id_en:string;
id_us:string
  constructor(public navCtrl: NavController, public navParams: NavParams, private userService:UsersProvider, private nativeStorage:NativeStorage) {
    this.rutinapage = new HacerrutinaPage(navCtrl,navParams,userService,nativeStorage);
  }

  ejercicio(){
    this.nativeStorage.getItem("idusuario")
    .then(
      data => {
        this.id_us = data.id;
        this.nativeStorage.getItem("datos")
        .then(data=> {
          this.id_en = data.id;
          console.log(this.id_en);
          console.log(this.id_us);
        });
      });
    //this.rutinapage = new HacerrutinaPage(this.navCtrl,this.navParams,this.userService);
    this.navCtrl.push(HacerrutinaPage);
  }


}
