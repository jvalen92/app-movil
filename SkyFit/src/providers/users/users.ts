import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

/*
  Generated class for the UsersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsersProvider {

  private url : string = 'https://gentle-mesa-13554.herokuapp.com/ejercicios'; 
  private url2 : string = 'https://randomuser.me/api/?results=25';
  private url3 : string = 'https://aqueous-earth-46855.herokuapp.com/rutinas';
  constructor(private http: Http) {
  }

  getUsers() {
    return this.http.get(this.url)
    .do( (res: Response) => console.log(res))
    .map((res: Response) => res.json());
  }

  getLogin(){
    return this.http.get(this.url2)
    .do( (res: Response) => console.log(res))
    .map((res: Response) => res.json());
  }

  postData(){
    return this.http.post(this.url3,{"nombre":"secambiodesdeionic"})
    .map(res => res.json().result);
  }
}
