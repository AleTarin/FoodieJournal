import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PathComponent } from './path.component';
import { PathDescribeComponent } from './path-describe/path-describe.component';
import { ChallengeComponent } from './challenge/challenge.component';
import { ChallengeStatusComponent } from '../shared/challlenge-status/challenge-status.component';
import { StatusButtonComponent } from '../shared/status-button/status-button.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    PathComponent,
    PathDescribeComponent,
    ChallengeComponent,
    ChallengeStatusComponent,
    StatusButtonComponent
  ],
  exports: [PathComponent]
})
export class PathModule { }
