import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Posters } from '../../pages/home/post.interface';

/*
  Generated class for the ProviderPostProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProviderPost {

  //post Url
  postUrl = 'https://jsonplaceholder.typicode.com/posts/';
 
  constructor(public http: HttpClient) {
    console.log('Hello ProviderPostProvider Provider');
  }
  getPost()
  {
    return this.http.get<Posters>(this.postUrl);
 } 

}
