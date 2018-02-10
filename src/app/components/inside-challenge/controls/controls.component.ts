import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { User } from '../../../user';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {
  buttonState: number;
  buttonText: string = "Mark as Started";
  color: string = "#FE5140";
  letterColor: string = "black";
  disabled: boolean = false;
  myProfile: User;
  @Input() idChallenge;

  private userSubject: BehaviorSubject<User>;


  setText() {

    var text: string;

    if (this.myProfile.status == 0) {

      text = "Mark as Started";
      this.color = "#FE5140";
      return text;

    }

    if (this.myProfile.status == 1) {

      text = "Mark as Completed";
      this.color = "#41B9FE";
      return text;
    }

    if (this.myProfile.status == 2) {

      text = " Way to go! Take the next challenge";
      this.color = "#f2f2f2";
      return text;
    }
  }






  challengeClicked() {

    if (this.myProfile.status == 0) {
      this.myProfile.status++;
      this.buttonText = "Mark as completed";
      console.log("hi" + this.myProfile.status);
      this.auth.setStatusChallenge(this.myProfile.journey, this.idChallenge, this.myProfile.status);
      //localStorage.setItem('prueva', JSON.stringify(this.buttonState));
      this.color = "#41B9FE";


      return;
    }
    if (this.myProfile.status == 1) {
      this.myProfile.status++;
      this.buttonText = " Way to go! Take the next challenge";
      this.auth.setStatusChallenge(this.myProfile.journey, this.idChallenge, this.myProfile.status);
      this.color = "#f2f2f2";

    }

  }





  constructor(private auth: AuthService) {


    this.myProfile = this.auth.getUserSubject().getValue();


  }

  ngOnInit() {
    //localStorage.clear();


    console.log("the input is" + this.idChallenge);
     console.log("user status is" + this.myProfile.status);


    if (this.myProfile.status) {
      console.log("button state found");
      // do something with the state
    }
    else {
      console.log("button state not found");

      // console.log(this.auth.getUserSubject().getValue());
      this.myProfile.status = 0;

    }

    this.auth.setStatusChallenge(this.myProfile.journey, this.idChallenge, this.myProfile.status);

    console.log(this.auth.getUserSubject().getValue());

    this.buttonText = this.setText();





  }






}
