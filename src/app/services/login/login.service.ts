/* import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs/Observable';

const usersList = [
  {username: 'dirtybits', 
   pass: '123456'}
];

@Injectable()
export class LoginService {
  verifyUserForLogin(username: string, pass: string): boolean{
    const isCorrect = usersList[0].username === username;
      return isCorrect;
  }
} */

const usersList = [
  {username: 'dirtybits', pass: '123456'},
  {username: 'teamuno', pass: '123456'}
];

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class LoginService {
  private userStatus = new Subject<any>();
  isLoggedIn = false;
  status = this.userStatus.asObservable();

  verifyUserStatus(data) {
    this.isLoggedIn = data.loggedIn;
    this.userStatus.next(data);
  }

  verifyUserForLogin(username: string, pass: string): boolean{
    const isCorrect = usersList.filter(user => user.username === username && user.pass === pass).length !== 0;
      return isCorrect;
  }
}
