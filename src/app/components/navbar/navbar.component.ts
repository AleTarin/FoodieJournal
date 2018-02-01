import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login/login.service';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  login: boolean = false;
  loginForm: FormGroup;

  constructor(private loginServ: LoginService, private formBuild: FormBuilder) {
   }

   public showLogin(){
     this.login = !this.login;
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
    this.loginServ.status.subscribe( (data) => {
      if(data.loggedIn === true){
         if(this.loginServ.verifyUserForLogin(this.loginForm.get('userField').value,
         this.loginForm.get('passField').value)){
          console.log(this.loginForm.get('userField').value);
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
    this.loginForm = this.formBuild.group({
      userField: ['', [Validators.required, Validators.minLength(5)]],
      passField: ['', [Validators.required]]
    });
  }

}
