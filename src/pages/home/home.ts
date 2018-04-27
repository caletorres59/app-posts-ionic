import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ThirdPage } from '../third/third';
import { ProviderPost } from '../../providers/provider-post/provider-post';
import { Posters } from './post.interface';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  posters:Posters;
  constructor(public navCtrl: NavController, public providerPost: ProviderPost) {
    
  providerPost.getPost().subscribe(content => {
    
    this.posters = content;
    console.log(this.posters);
    }); 
      
  }
  goToSecondPage(post:Posters): void 
  {
    console.log(post);
   this.navCtrl.push('SecondPage', {contentPost: post});
    // this.navCtrl.setRoot('SecondPage');
    // this.navCtrl.pop();
  }

}
