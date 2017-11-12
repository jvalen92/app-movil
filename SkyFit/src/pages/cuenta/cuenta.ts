import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UsersProvider } from "../../providers/users/users";
import { Camera } from '@ionic-native/camera';
import { NativeStorage } from '@ionic-native/native-storage';

@Component({
  selector: 'page-cuenta',
  templateUrl: 'cuenta.html',
  providers: [Camera]
})
export class CuentaPage {

  users:any[] = [];

  public base64Image: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private userService: UsersProvider,private camera: Camera, private nativeStorage: NativeStorage) {
    this.nativeStorage.getItem('IMAGEN')
    .then(
      data => {
        this.base64Image=data.image
        });
  }
  
  openGallery(){  
    this.camera.getPicture({
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth:1000,
      targetHeight: 1000,
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM
    }).then((imageData) => {
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.log(err);
    });
  }

  doRefresh(refresher){
    console.log('Begin async operation', refresher);
        setTimeout(() => {
          console.log('Async operation has ended');
          this.nativeStorage.setItem("IMAGEN",{
            image:this.base64Image
          });
          refresher.complete();
        }, 1000);
  }
/*
*/
}
