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
    let myProfile: User = JSON.parse(localStorage.getItem('profile'));
      if(!myProfile.last_challenge && !myProfile.journey){
        this.hasJourney = false; 
      }else{
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
    if(this.buttonLabel === "Follow"){
        // let userChoose = this.auth.userSubject.getValue();
        // userChoose = JSON.parse(localStorage.getItem('profile'));
        // userChoose.journey = true;
        this.auth.userStartedJourney(true);
        // localStorage.setItem('profile', JSON.stringify(userChoose));
        this.buttonLabel = "Continue";
      }
  }

  ngOnInit() {}
}
