import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login/login.service';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';
import { AppRoutingModule } from '../../app-routing.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  login: boolean = false;
  loginForm: FormGroup;
  sidebar: boolean = false;

  constructor(private loginServ: LoginService, private router: RouterModule) {
  }

  public showLogin() {
    this.login = !this.login;
  }

  public showSidebar() {
    this.sidebar = !this.sidebar;
    console.log(this.sidebar);
  }

  /* loginTo(loginForm: FormGroup){
    console.log("logueando");
     //if (data.isLoggedIn === true) this.router.navigateByUrl('/admin/dashboard'):
  } */
  loginTo() {
    console.log('doing login...');
    this.loginServ.verifyUserStatus({
      loggedIn: true,
    });
    this.loginServ.status.subscribe((data) => {
      if (data.loggedIn === true) {
        
        if (this.loginServ.verifyUserForLogin(this.loginForm.get('userField').value,
          this.loginForm.get('passField').value)) {
            localStorage.setItem('user', JSON.stringify(this.loginForm.get('userField').value));
            localStorage.setItem('pass', JSON.stringify(this.loginForm.get('passField').value));
            
            console.log(JSON.parse(localStorage.getItem('user')));
            
            // Mover a la otra página
           //this.router.navigateByUrl('/tracks');
            }else{
          data.loggedIn = false;
        }
      }
      //if (data.isLoggedIn === true) this.router.navigateByUrl('/admin/dashboard');
    });
  }

  logout() {
    console.log('logout...');
    //this.loginServ.updateUserStatus({loggedIn: false});
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      userField: new FormControl('', [Validators.required, Validators.minLength(5)]),
      passField: new FormControl('', Validators.required)
    }, { updateOn: 'blur' });
  }

}
