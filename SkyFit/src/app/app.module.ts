import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SQLite } from '@ionic-native/sqlite';
import { NativeStorage }  from '@ionic-native/native-storage';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { InicioPage } from "../pages/inicio/inicio";
import { TabsPage} from "../pages/tabs/tabs";
import { LoginPage } from "../pages/login/login";
import { SignupPage } from "../pages/signup/signup";
import { PrincipalPage} from "../pages/principal/principal";
import { CuentaPage } from "../pages/cuenta/cuenta";
import { EjerciciosPage } from "../pages/ejercicios/ejercicios";
import { HacerrutinaPage } from "../pages/hacerrutina/hacerrutina";
import { UsersProvider } from "../providers/users/users";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InicioPage,
    TabsPage,
    LoginPage,
    SignupPage,
    PrincipalPage,
    CuentaPage,
    EjerciciosPage,
    HacerrutinaPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    InicioPage,
    TabsPage,
    LoginPage,
    SignupPage,
    PrincipalPage,
    CuentaPage,
    EjerciciosPage,
    HacerrutinaPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    NativeStorage,
    UsersProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
