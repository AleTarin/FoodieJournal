import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LoginService {

  constructor() { }
  private userStatus = new Subject<any>();
  isLoggedIn = false;
  status = this.userStatus.asObservable();

  updateUserStatus(data) {
    this.isLoggedIn = data.loggedIn;
    this.userStatus.next(data);
  }  
}
