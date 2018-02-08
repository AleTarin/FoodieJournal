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
    this.auth.userProfile$.subscribe(profile => {
      const myProfile = <User>profile;
      if(!myProfile.last_challenge && !myProfile.journey){
        this.hasJourney = false; 
      }else{
        this.hasJourney = true;
      }
    });
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
      this.auth.userProfile$.subscribe(res => {
        console.log("dentro");
        let myProfile: any = <User>res;
        console.log(<User>res);
        let userChoose = new User();
        userChoose.name = myProfile.name;
        userChoose.nickname = myProfile.nickname;
        userChoose.picture = userChoose.picture;
        userChoose.journey = true;
        console.log(userChoose);
        localStorage.setItem('profile2', JSON.stringify(userChoose));
      //}
    });

    let userChoose = new User();
        userChoose.name = "bla"
        userChoose.nickname = "bla"
        userChoose.picture = "pla"
        userChoose.journey = true;
        console.log(userChoose);
        localStorage.setItem('profile', JSON.stringify(userChoose));
  }





  

  ngOnInit() {
    

}
}
