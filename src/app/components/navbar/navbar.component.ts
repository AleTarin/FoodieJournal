import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {


  login: boolean = false;
  constructor(private loginServ: LoginService) {
   }

   public showLogin(){
     this.login = !this.login;
   }

   loginTo(){
     console.log("logueando");
     this.loginServ.updateUserStatus({
      loggedIn: true
      //username: this.loginForm.get('email').value
    });
    this.loginServ.status.subscribe( () => {
      console.log("redireccionando");
      //if (data.isLoggedIn === true) this.router.navigateByUrl('/admin/dashboard'):
    });
   }

    logout() {
      console.log('logout...');
      this.loginServ.updateUserStatus({loggedIn: false});
    }

  ngOnInit() {
  }

}
