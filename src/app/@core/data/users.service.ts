import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/of';
import { Http, Response} from '@angular/http';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

let counter = 0;

export interface User{
  name:String;
  picture:String;
}

@Injectable()
export class UserService {

  SERVER_URL = 'http://localhost/gem/';
  public static user:User;
  public static loggedIn;
  
  private LOGGEDIN_KEY="GEM_LOGGEDIN";
  private USER_KEY="GEM_USER_KEY";
  

  private users = {
    nick: { name: 'Nick Jones', picture: 'assets/images/nick.png' },
    eva: { name: 'Eva Moor', picture: 'assets/images/eva.png' },
    jack: { name: 'Jack Williams', picture: 'assets/images/jack.png' },
    lee: { name: 'Lee Wong', picture: 'assets/images/lee.png' },
    alan: { name: 'Alan Thompson', picture: 'assets/images/alan.png' },
    kate: { name: 'Kate Martinez', picture: 'assets/images/kate.png' },
  };

  private userArray: any[];

  constructor(private http: Http) {
    this.loadUserData();
    if(UserService.loggedIn=="true"){
        UserService.loggedIn=true;
    }else if(UserService.loggedIn=="false"){
        UserService.loggedIn=false;
    }

//    UserService.loggedIn =="true"? true:false;
  }

  getUsers(): Observable<any> {
    return Observable.of(this.users);
  }

  getUserArray(): Observable<any[]> {
    return Observable.of(this.userArray);
  }

  getUser(): Observable<any> {
    counter = (counter + 1) % this.userArray.length;
    return Observable.of(this.userArray[counter]);
  }

  login() {
    return this.http.get(this.SERVER_URL, {params: {purpose: 'login'}})
    .map((response: Response) => response.json());
  }

  saveUserData(){
    localStorage.setItem(this.LOGGEDIN_KEY,UserService.loggedIn);
    localStorage.setItem(this.USER_KEY,JSON.stringify(UserService.user));
  }

  loadUserData(){
    UserService.loggedIn=localStorage.getItem(this.LOGGEDIN_KEY);
    UserService.user=JSON.parse(localStorage.getItem(this.USER_KEY));
  }


}
