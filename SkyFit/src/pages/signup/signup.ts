import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, Events } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { UsersProvider } from "../../providers/users/users";

import { InicioPage } from "../inicio/inicio";
import { LoginPage } from "../login/login";
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
    inicio:any = InicioPage;
    public login: LoginPage;

    name: string;
    id: string;
    password: string;
    cpassword: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private loadCtrl: LoadingController, private nativeStorage: NativeStorage, private usersService:UsersProvider, private event:Events) {
    this.login = new LoginPage(navCtrl,navParams,loadCtrl, nativeStorage, usersService);
  }

  irAtras(){
    this.nativeStorage.setItem("datos",{
      name:this.name,
      password: this.password,
      cpassword: this.cpassword,
      id:this.id
    });
    if (this.password == this.cpassword){
      console.log(this.name);
      console.log(this.password);
      console.log(this.id);
      this.usersService.postUser(this.name,this.password,this.id).subscribe(data=> console.log(data));

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
