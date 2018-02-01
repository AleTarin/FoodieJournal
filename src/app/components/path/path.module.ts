import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PathComponent } from './path.component';
import { PathDescribeComponent } from './path-describe/path-describe.component';
import { ChallengeComponent } from './challenge/challenge.component';
import { ChallengeStatusComponent } from '../shared/challlenge-status/challenge-status.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    PathComponent,
    PathDescribeComponent,
    ChallengeComponent,
    ChallengeStatusComponent
  ],
  exports: [PathComponent]
})
export class PathModule { }
