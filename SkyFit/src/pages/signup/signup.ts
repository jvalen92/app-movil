import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';

import { InicioPage } from "../inicio/inicio";
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
    inicio:any = InicioPage;

    name: string;
    username: string;
    email: string;
    password: string;
    cpassword: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private loadCtrl: LoadingController, private nativeStorage: NativeStorage) {
  }

  irAtras(){
    this.nativeStorage.setItem('my-identify-card',{
      name:this.name,
      username: this.username,
      email: this.email,
      password: this.password,
      cpassword: this.cpassword
    });
    if (this.password == this.cpassword){
      console.log(this.name);
      console.log(this.username);
      console.log(this.email);
      console.log(this.password);

    let loader = this.loadCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
    this.navCtrl.popToRoot();
    this.nativeStorage.getItem('my-identify-card')
    .then(
      data => console.log(data),
      error => console.error(error)
    );
  }else{
    console.log("Error");
  }
}



}
