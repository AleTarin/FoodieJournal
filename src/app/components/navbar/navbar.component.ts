import { Component, OnInit } from '@angular/core';
// import { LoginService } from '../../services/login/login.service';
// import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  // login: boolean = false;
  // loginForm: FormGroup;
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
    this.auth.getProfileInfo().subscribe(res => console.log(JSON.stringify(res)));
  }

}

//   constructor(private loginServ: LoginService, private formBuild: FormBuilder) {
//   }

//   public showLogin() {
//     this.login = !this.login;
//   }

//   /* loginTo(loginForm: FormGroup){
//     console.log("logueando");
//      //if (data.isLoggedIn === true) this.router.navigateByUrl('/admin/dashboard'):
//   } */
//   loginTo() {
//     console.log('doing login...');
//     this.loginServ.verifyUserStatus({
//       loggedIn: true,
//     });
//     this.loginServ.status.subscribe((data) => {
//       if (data.loggedIn === true) {
//         if (this.loginServ.verifyUserForLogin(this.loginForm.get('userField').value,
//           this.loginForm.get('passField').value)) {
//           // Mover a la otra página
//         }else{
//           data.loggedIn = false;
//         }
//       }
//       //if (data.isLoggedIn === true) this.router.navigateByUrl('/admin/dashboard');
//     });
//   }

//   logout() {
//     console.log('logout...');
//     //this.loginServ.updateUserStatus({loggedIn: false});
//   }

//   ngOnInit() {
//     this.loginForm = new FormGroup({
//       userField: new FormControl('', [Validators.required, Validators.minLength(5)]),
//       passField: new FormControl('', Validators.required)
//     }, { updateOn: 'blur' });
//   }

// }
