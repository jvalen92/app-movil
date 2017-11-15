import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { UsersProvider } from "../../providers/users/users";
import { PrincipalPage } from "../principal/principal";


import { HomePage } from "../home/home";
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  email: string;
  password: string;
  correo: string;
  id: string;
  contra: string;
  paso: boolean;
  info:any[]= [];
  principal:PrincipalPage;
  id_usuario:string;
   private url4 : string = 'https://immense-mountain-21747.herokuapp.com/entrenadors/'
  constructor(public navCtrl: NavController, public navParams: NavParams, private loadCtrl:LoadingController, private nativeStorage: NativeStorage, private userService:UsersProvider) {
    this.principal = new PrincipalPage(navCtrl,navParams,userService, nativeStorage);
}
  ir_home(){
    var bandera = false;
    this.nativeStorage.getItem("datos")
    .then(
      data => {
        this.id = data.id;
        
        this.userService.getUser(this.id).subscribe(data => {
          this.info=data;
          this.info.forEach(element => {
            if(element.nombre == this.email){
              if(element.password === this.password){
                bandera = true;
                this.id_usuario=element.id;
                this.nativeStorage.setItem("idusuario",{
                  id:this.id_usuario
                });
              }
            }
        });
        if(bandera == true){
        this.url4=this.url4+this.id+'/usuarios/'+this.id_usuario;
        this.id_usuario
        let loader = this.loadCtrl.create({
    content: "Please wait...",
    duration: 3000
    });
  loader.present();
      this.navCtrl.setRoot(HomePage);
  }
      },
      error => console.error(error)
    );
  });
}
}




