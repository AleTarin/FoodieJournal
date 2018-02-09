import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PathComponent } from './path.component';
import { PathDescribeComponent } from './path-describe/path-describe.component';
import { ChallengeComponent } from './challenge/challenge.component';
import { ChallengeStatusComponent } from '../shared/challlenge-status/challenge-status.component';
import { StatusButtonComponent } from '../shared/status-button/status-button.component';
import { GoogleMapComponent } from '../google-map/google-map.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../../environments/environment';
import { AgmCoreModule } from '@agm/core';
import { ModalComponent } from '../modal/modal.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { ListPathsComponent } from '../list-paths/list-paths.component';
import { PieProgressBarComponent } from '../shared/pie-progress-bar/pie-progress-bar.component';
import { RecentDropdownComponent } from '../recent-dropdown/recent-dropdown.component';
import { ListDropdownComponent } from '../list-dropdown/list-dropdown.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ContactInfoComponent } from '../contact-info/contact-info.component';
import { AppRoutingModule } from '../../app-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsKey
    }),
    NgbModule,
    RouterModule,
  ],
  declarations: [
    PathComponent,
    PathDescribeComponent,
    ChallengeComponent,
    ChallengeStatusComponent,
    StatusButtonComponent,
    GoogleMapComponent,
    CarouselComponent,
    ModalComponent,
    StarRatingComponent,
    ListPathsComponent,
    ListDropdownComponent,
    PieProgressBarComponent,
    RecentDropdownComponent,
    ContactInfoComponent,
  
  ],
  exports: [],
  entryComponents: [CarouselComponent]

})
export class PathModule { }
