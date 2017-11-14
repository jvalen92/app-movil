import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Rx';
/**
 * Generated class for the TimerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-timer',
  templateUrl: 'timer.html',
})

export class TimerPage {
  subscription;
  i = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  start() {
    this.subscription = Observable.interval(1000).subscribe(x => {
    // the number 1000 is on miliseconds so every second is going to have an iteration of what is inside this code.
      console.log (this.i);
      this.i++;
      document.getElementById("timer").innerHTML=(this.i.toString());
    });
  }
  stop() {
    this.subscription.unsubscribe ();
    this.i=0;
    document.getElementById("timer").innerHTML=(this.i.toString());
  }
  pause() {
    this.subscription.unsubscribe ();
  }
}
