import { Component, ViewChild } from '@angular/core';
import { NavController,Nav, LoadingController } from 'ionic-angular';

import { PrincipalPage } from "../principal/principal";
import { InicioPage } from "../inicio/inicio";

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
    }else{
      this.navCtrl.push(page.pageName);
    }
  }

  isActive(page:PageInterface){

  }

}
