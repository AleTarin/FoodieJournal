import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { User } from '../../../user';
import { AuthService } from '../../../services/auth.service';
import { ParamMap } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-status-button',
  templateUrl: './status-button.component.html',
  styleUrls: ['./status-button.component.scss']
})
export class StatusButtonComponent implements OnInit, OnChanges {

  hasJourney: boolean;
  isCompleted: boolean;
  buttonLabel = '';
  @Input() progress: number;
  @Input() pathId: number;

  ngOnChanges(changes: SimpleChanges): void {
      if (changes.progress && changes.progress.currentValue && changes.pathId && changes.pathId.currentValue  ) {
        this.pathId = changes.pathId.currentValue;
        this.progress = changes.progress.currentValue;
        if (changes.pathId.currentValue !== changes.pathId.previousValue) {
          this.checkCurrentStatus();
        }
      }
    }

  constructor(private auth: AuthService, private route: ActivatedRoute ) {
    this.journeyAssgned();
    this.hasCompleted();
    this.checkCurrentStatus();
  }

  public checkCurrentStatus() {
    if (!this.hasJourney && !this.isCompleted) {
      this.buttonLabel = 'Follow';
    }

    if (this.hasJourney && !this.isCompleted) {
      this.buttonLabel = 'Continue';
    }

    if (this.hasJourney && this.isCompleted) {
      this.buttonLabel = 'Completed';
    }
  }

  public journeyAssgned() {
    const myProfile: User = JSON.parse(localStorage.getItem('profile'));
      if (!myProfile.journey) {
        this.hasJourney = false;
      } else {
        this.hasJourney = true;
      }
  }

  public hasCompleted() {
    if (this.progress !== 100) {
      this.isCompleted = false;
    } else {
      this.isCompleted = true;
    }
  }

  public chooseJourney() {
    if (this.buttonLabel === 'Follow') {
        this.auth.userStartedJourney(this.pathId);
        this.buttonLabel = 'Continue';
      }
  }

  public getPathSelected(): boolean {
    if (this.pathId !== this.auth.getUserSubject().getValue().journey) {
      this.buttonLabel = 'Follow';
      return true;
    } else {
      return false;
    }
  }

  ngOnInit() {
  }
}
