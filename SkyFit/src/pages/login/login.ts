import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';

import { HomePage } from "../home/home";
import { InicioPage } from "../inicio/inicio";
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  email: string;
  password: string;
  correo: string;
  contra: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private loadCtrl:LoadingController, private nativeStorage: NativeStorage) {
  }
//Seguir trabajando en esto que es login que tiene problemas porque se sobrescriben cosas
  ir_home(){

    this.nativeStorage.getItem('my-identity-card')
    .then(
      data => {
        this.correo = data.email;
        this.contra = data.password;
      },
      error => console.error(error)
    );
    console.log(this.email);
    console.log(this.password);
    console.log(this.correo);
    console.log(this.contra);
    if(this.correo == this.email && this.contra == this.password){
    let loader = this.loadCtrl.create({
  content: "Please wait...",
  duration: 3000
  });
loader.present();
    this.navCtrl.setRoot(HomePage);
  }else{
    console.log("Error");
    this.navCtrl.setRoot(InicioPage);
  }
}


}
