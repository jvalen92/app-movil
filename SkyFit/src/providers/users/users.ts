import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/*
  Generated class for the UsersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsersProvider {

  constructor(private http: Http) {
  }

  getUsers() {
    return this.http.get('https://randomuser.me/api/?results=25');
  }
}
