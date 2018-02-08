import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { User } from '../../../user';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-status-button',
  templateUrl: './status-button.component.html',
  styleUrls: ['./status-button.component.scss']
})
export class StatusButtonComponent implements OnInit, OnChanges {

  hasJourney: boolean;
  isCompleted: boolean;
  buttonLabel: string = "";
  @Input() progress : number;

  ngOnChanges(changes: SimpleChanges): void {
      if(changes.progress.currentValue !==undefined){
        console.log(changes.progress.currentValue);
      }
    }

  constructor(private auth: AuthService) { 
    this.journeyAssgned();
    this.hasCompleted();
    this.checkCurrentStatus();
  }

  public checkCurrentStatus(){
    if (!this.hasJourney && !this.isCompleted) {
      console.log("Follow");
      this.buttonLabel = "Follow";
    }

    if (this.hasJourney && !this.isCompleted) {
      this.buttonLabel = "Continue";
    }

    if (this.hasJourney && this.isCompleted) {
      this.buttonLabel = "Completed";
    }
  }

  public journeyAssgned(){
    console.log("dentro");
    let myProfile: User = JSON.parse(localStorage.getItem('userNewProfile'));
    myProfile.last_challenge = "challenge";
    console.log(myProfile);
      if(myProfile.last_challenge && !myProfile.journey){
        this.hasJourney = false; 
      }else{
        console.log("no la he definido");
        this.hasJourney = true;
      }
  }

  public hasCompleted(){
    if(this.progress !== 100){
      this.isCompleted = false;
    }else{
      this.isCompleted = true;
    }
  }

  public chooseJourney() {
    console.log("fdsfsds");
    //if(this.buttonLabel === "Follow"){
        console.log("dentro");

        let userChoose: User;
        userChoose = JSON.parse(localStorage.getItem('userNewProfile'));
        userChoose.journey = true;
        localStorage.setItem('userNewProfile', JSON.stringify(userChoose));
      //}
  }





  

  ngOnInit() {
    

}
}
