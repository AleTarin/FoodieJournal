import { Component, OnInit, OnChanges, Input,  SimpleChanges } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import { User } from '../../user';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  picture: string;
  nickname: string;
  profile: any;
  sidebar = false;


  constructor(private auth: AuthService) {
    auth.handleAuthentication();
  }

  login() {
    this.auth.login();
  }

  logout() {
    this.auth.logout();
  }

  isUserLoggedIn() {
    return this.auth.isLoggedInCache();
  }

  public showSidebar() {
    this.sidebar = !this.sidebar;
  }

  ngOnInit(): void {
    this.auth.userProfile$.subscribe(res => {
      this.profile = <User>res;
      let recentProfile: User = new User();
    recentProfile.name = this.profile.name;
    recentProfile.nickname = this.profile.nickname;
    recentProfile.picture = this.profile.picture;
    localStorage.setItem('userNewProfile', JSON.stringify(recentProfile));
    });
  }

}
