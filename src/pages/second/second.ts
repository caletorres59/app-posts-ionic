import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Posters } from '../home/post.interface';

/**
 * Generated class for the SecondPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-second',
  templateUrl: 'second.html',
})
export class SecondPage {
  public post: Posters;
  body: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
   this.post = this.navParams.get('contentPost');
    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecondPage');
  }

}
