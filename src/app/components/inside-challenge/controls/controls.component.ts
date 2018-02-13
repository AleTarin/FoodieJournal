import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { User } from '../../../user';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { PathsService } from '../../../services/paths.service';
import { Router, ParamMap } from '@angular/router';
import { Track } from '../../../interfaces/track';
import { Business } from '../../../interfaces/business';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { ActivatedRoute } from '@angular/router';
import { stat } from 'fs';
@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit, OnChanges {
  buttonState = 0;
  buttonText = 'Mark as started';
  color = '#FE5140';
  letterColor = 'black';
  disabled = false;
  myProfile: User;
  @Input() idChallenge;
  @Input() track: Track;
  private userSubject: BehaviorSubject<User>;
  setText(status: number) {
    if (status === 0) {
      this.buttonText = 'Mark as Started';
      this.color = '#FE5140';
      this.buttonState = 0;
    }
    if (status === 1) {
      this.buttonText = 'Mark as Completed';
      this.color = '#41B9FE';
      this.buttonState=1;
    }
    if (status === 2) {
      this.buttonText = ' Way to go! Take the next challenge';
      this.color = '#f2f2f2';
      this.buttonState=2;
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
    if (indexChallenge < 9) {
      this.router.navigate(['/paths', this.track.id, this.track.challenges[indexChallenge + 1].id]);
    } else {
      this.router.navigate(['/paths', this.track.id, this.track.challenges[0].id]);
    }
  }
  getIndex(ch: string) {
    return this.track.challenges.findIndex(challenge => challenge.id === ch);
  }
  challengeClicked() {
    if (this.buttonState === 0) {
      this.buttonState++;
      this.buttonText = 'Mark as completed';
      this.pathService.setStatusChallenge(this.track.id, this.idChallenge, this.buttonState);
      this.color = '#41B9FE';
      return;
    }
    if (this.buttonState === 1) {
      this.buttonState++;
      this.buttonText = ' Way to go! Take the next challenge';
      this.pathService.setStatusChallenge(this.track.id, this.idChallenge, this.buttonState);
      this.color = '#f2f2f2';
    }
  }
  constructor(private auth: AuthService, private pathService: PathsService, private router: Router, private ActiveRoute: ActivatedRoute) {
    this.myProfile = this.auth.getUserSubject().getValue();
  }
  ngOnInit() {
    this.ActiveRoute.paramMap.subscribe((params: ParamMap) => {
      this.pathService.getPathsInfo().subscribe(paths => {
        const indexChallenge = this.getIndex(this.idChallenge);
        this.track = <Track>paths[params.get('id')];
        this.idChallenge = params.get('challenge');

        const status = this.pathService.getStatusChallenge(this.track.id, indexChallenge);

        this.setText(status);
        });
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.ActiveRoute.paramMap.subscribe((params: ParamMap) => {
      this.pathService.getPathsInfo().subscribe(paths => {
        const indexChallenge = this.getIndex(this.idChallenge);
        this.track = <Track>paths[params.get('id')];
        this.idChallenge = params.get('challenge');

        const status = this.pathService.getStatusChallenge(this.track.id, indexChallenge);

        this.setText(status);

        });
    });
  }
}
