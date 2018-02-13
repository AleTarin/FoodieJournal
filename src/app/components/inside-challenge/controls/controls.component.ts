import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { User } from '../../../user';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { PathsService } from '../../../services/paths.service';
import { Router } from '@angular/router';
import { Track } from '../../../interfaces/track';
import { Business } from '../../../interfaces/business';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {
  buttonState: number;
  buttonText = 'Mark as Started';
  color = '#FE5140';
  letterColor = 'black';
  disabled = false;
  myProfile: User;
  @Input() idChallenge;
  @Input() track: Track;

  private userSubject: BehaviorSubject<User>;


  setText() {

    let text: string;

    if (this.myProfile.status === 0) {

      text = 'Mark as Started';
      this.color = '#FE5140';
      return text;

    }

    if (this.myProfile.status === 1) {

      text = 'Mark as Completed';
      this.color = '#41B9FE';
      return text;
    }

    if (this.myProfile.status === 2) {

      text = ' Way to go! Take the next challenge';
      this.color = '#f2f2f2';
      return text;
    }
  }

  previous() {
    const indexChallenge = this.getIndex(this.idChallenge);
    if (indexChallenge > 0) {
      this.router.navigate(['/paths', this.track.id, this.track.challenges[indexChallenge - 1].id]);
    } else {
      this.router.navigate(['/paths', this.track.id, this.track.challenges[this.track.challenges.length - 1].id]);
    }
  }

  next() {
    const indexChallenge = this.getIndex(this.idChallenge);
    if (indexChallenge > this.track.challenges.length - 1) {
      this.router.navigate(['/paths', this.track.id, this.track.challenges[indexChallenge + 1].id]);
    } else {
      this.router.navigate(['/paths', this.track.id, this.track.challenges[this.track.challenges.length - 1].id]);
    }
  }

  getIndex(ch: string) {
    return this.track.challenges.findIndex(challenge => challenge.id === ch);
  }

  challengeClicked() {

    if (this.myProfile.status === 0) {
      this.myProfile.status++;
      this.buttonText = 'Mark as completed';
      this.pathService.setStatusChallenge(this.myProfile.journey, this.idChallenge, this.myProfile.status);
      this.color = '#41B9FE';
      return;
    }
    if (this.myProfile.status === 1) {
      this.myProfile.status++;
      this.buttonText = ' Way to go! Take the next challenge';
      this.pathService.setStatusChallenge(this.myProfile.journey, this.idChallenge, this.myProfile.status);
      this.color = '#f2f2f2';
    }
  }

  constructor(private auth: AuthService, private pathService: PathsService, private router: Router) {
    this.myProfile = this.auth.getUserSubject().getValue();
  }

  ngOnInit() {

    if (this.myProfile.status) {
      console.log('button state found');
      // do something with the state
    } else {
      console.log('button state not found');
      // console.log(this.auth.getUserSubject().getValue());
      this.myProfile.status = 0;
    }

    this.buttonText = this.setText();
  }
}
