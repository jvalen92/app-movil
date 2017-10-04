import { Component, ViewChild } from '@angular/core';
import { NavController,Nav, LoadingController } from 'ionic-angular';

import { PrincipalPage } from "../principal/principal";
import { InicioPage } from "../inicio/inicio";
import { CuentaPage } from "../cuenta/cuenta";
import { EjerciciosPage } from "../ejercicios/ejercicios";

export interface PageInterface{
  title: string;
  pageName: string;
  icon: string;
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  rootPage = PrincipalPage;

  @ViewChild(Nav) nav: Nav;

  pages: PageInterface[]= [
    {title:"informacion", pageName:"InformacionPage", icon:"information"},
    {title:"cuenta", pageName:"CuentaPage", icon:"person"},
    {title:"ejercicios", pageName:"EjerciciosPage", icon:"list"},
    {title:"log-out", pageName:"LogoutPage", icon:"log-out"}
  ]

  constructor(public navCtrl: NavController, private loadCtrl:LoadingController) {
  }

  openPage(page:PageInterface){
    if(page.pageName=="LogoutPage"){
      let loader = this.loadCtrl.create({
    content: "Please wait...",
    duration: 3000
  });
  loader.present();
      this.navCtrl.setRoot(InicioPage);
    }else if (page.pageName == "CuentaPage"){
      this.navCtrl.push(CuentaPage);
    }else if(page.pageName == "EjerciciosPage"){
      this.navCtrl.push(EjerciciosPage);
    }else{
      this.navCtrl.push(page.pageName);
    }
  }

  isActive(page:PageInterface){

  }

}
