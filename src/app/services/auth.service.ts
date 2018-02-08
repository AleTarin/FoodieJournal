// src/app/auth/auth.service.ts

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/shareReplay';
import * as auth0 from 'auth0-js';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Http } from '@angular/http/src/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observer } from 'rxjs/Observer';
import { User } from '../user';

@Injectable()
export class AuthService {
  API_KEY: string;
  myHeaders: HttpHeaders;

  public userProfile: any;
  private observer: Observer<string>;
  userProfile$: Observable<any> = new Observable(obs => this.observer = obs);
  private userSubject: BehaviorSubject<User>;
  user$: Observable<User>;
  loggedIn$: Observable<boolean>;

  auth0 = new auth0.WebAuth({
    clientID: 'zu4yaxCNKnBda1NAT0rn8lLM0qOB5q1V',
    domain: 'foddiejournal.auth0.com',
    responseType: 'token id_token',
    audience: 'https://foddiejournal.auth0.com/userinfo',
    redirectUri: 'http://localhost:4200/paths',
    scope: 'openid profile'
  });

  constructor(public router: Router, private http: HttpClient) {
    const initialUser = JSON.parse(localStorage.getItem('profile') || null);
    this.userSubject = new BehaviorSubject(initialUser);
    this.user$ = this.userSubject.asObservable().do(user => {
      console.log(user);
      if (user) {
        this.saveToLocalStorage(`users|${user.email}`, user);
      } 
      
      this.saveToLocalStorage('profile', user);
    });

    this.loggedIn$ = this.user$.map(user => user !== null).shareReplay(1);
  }

  private saveToLocalStorage(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  public login(): void {
    this.auth0.authorize();
  }

  // ...
  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
        this.router.navigate(['/paths']);
        this.getProfile();
      } else if (err) {
        this.router.navigate(['/home']);
        console.log(err);
      }
    });
  }

  private setSession(authResult): void {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  public logout(): void {
    this.userSubject.next(null);
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    
    // Go back to the home route
    this.router.navigate(['/home']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

  public isLoggedInCache(): boolean {
    return this.isAuthenticated && !!localStorage.getItem('access_token');
  }

  public getUser(): void {
    const profile = localStorage.getItem('profile');
    if (profile === null) {
      this.getProfile();
    } else {
      this.observer.next(JSON.parse(localStorage.getItem('profile')));
    }
  }

  public getProfile(): void {

    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      throw new Error('Access token must exist to fetch profile');
    }

    const self = this;
    this.auth0.client.userInfo(accessToken, (err, profile) => {
      if (profile) {
        self.userProfile = profile;
      }
      // localStorage.setItem('profile', JSON.stringify(profile));
      // this.observer.next(profile);
      this.userSubject.next(profile);
    });
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }

  userStartedJourney(startedJourney: boolean) {
    const user = {
      ...this.userSubject.getValue(),
      journey: startedJourney
    };

    this.userSubject.next(user);
  }
}
