import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

/*
  Generated class for the UsersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsersProvider {

  private url : string = 'https://randomuser.me/api/?results=25'; 
  constructor(private http: Http) {
  }

  getUsers() {
    return this.http.get(this.url)
    .do( (res: Response) => console.log(res))
    .map((res: Response) => res.json());
  }
}
