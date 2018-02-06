import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router){}
  
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.alreadyLoggedIn(state.url);
  }

  alreadyLoggedIn(urlToNavigate: string): boolean {
    if(this.authService.isLoggedInCache()){
      console.log(urlToNavigate);
      return true;
    } else {
      this.router.navigate(['/home']);
      return false;
    }
  }
}
