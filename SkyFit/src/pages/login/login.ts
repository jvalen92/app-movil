import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';

import { HomePage } from "../home/home";
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  email: string;
  password: string;
  correo: string;
  contra: string;
  paso: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private loadCtrl:LoadingController, private nativeStorage: NativeStorage) {
  }
  ir_home(){
    this.nativeStorage.getItem('my-identify-card')
    .then(
      data => {
        this.correo = data.email;
        this.contra= data.password;
        if(this.correo == this.email && this.contra == this.password){
          let loader = this.loadCtrl.create({
            content: "Please wait...",
            duration: 3000
            });
          loader.present();
              this.navCtrl.setRoot(HomePage);
        }else{
          console.error("DATOS INCORRECTOS");
        }
      },
      error => console.error(error)
    );
  }



}
