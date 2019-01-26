import { Injectable } from '@angular/core';
import {Http,Headers,RequestOptions,Response} from '@angular/http';

//import 'rxjs/add/operator/map'; 
import {map} from 'rxjs/operators';
//import 'rxjs/add/operator/catch';
import {catchError} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl:string = 'http://localhost:8080/api';
  private headers =  new Headers({'Content-Type':'application/json'});
  private options =  new RequestOptions({headers:this.headers});
  private user = new User();

  constructor(private _http:Http) { }
 
  getUsers(){
    return this._http.get(this.baseUrl+'/users',this.options).pipe(map((response:Response)=>response.json()))
    //catchError(this.errorHandler));
  }

  getUser(id:number){
    return this._http.get(this.baseUrl+'/user/'+id,this.options).pipe(map((response:Response)=>response.json()))
    //catchError(this.errorHandler));
  }

  deleteUser(id:number){
    return this._http.delete(this.baseUrl+'/user/'+id,this.options).pipe(map((response:Response)=>response.json()))
    //catchError(this.errorHandler));
  }

  createUser(user:User){
    return this._http.post(this.baseUrl+'/user/',JSON.stringify(user),this.options).pipe(map((response:Response)=>response.json()))
    //catchError(this.errorHandler));
  }

  updateUser(user:User){
    return this._http.put(this.baseUrl+'/user/',JSON.stringify(user),this.options).pipe(map((response:Response)=>response.json()))
    //catchError(this.errorHandler));
  }

  errorHandler(error:Response){

  }

  setter(user:User){
    this.user = user;
  }

  getter(){
    return this.user;
  }
}
