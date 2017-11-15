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
  private url4 : string = 'https://immense-mountain-21747.herokuapp.com/entrenadors/';
  private url5 : string = 'https://pacific-headland-94110.herokuapp.com/ejercicios';
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

  getLista(){
    return this.http.get(this.url5)
    .do( (res: Response) => console.log(res))
    .map((res: Response) => res.json());
  }

  postData(){
    return this.http.post(this.url3,{"nombre":"secambiodesdeionic"})
    .map(res => res.json().result);
  }

  postUser(nombre, passs, id){
    var u = this.url4+'/'+id+"/usuarios";
    return this.http.post(u,{
      "nombre":nombre,
      "password":passs,
    })
  }
  getUser(id){
    var a = this.url4+'/'+id+'/usuarios';
        return this.http.get(a)
    .do( (res: Response) => console.log(res))
    .map((res: Response) => res.json());
  }

  getEjercicios(id_us,id_en){
    var a = this.url4+id_en+'/usuarios/1/rutinas/20/ejercicios';
    return this.http.get(a)
    .do( (res: Response) => console.log(res))
    .map((res: Response) => res.json());
  }
}
