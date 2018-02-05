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
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { ContactInfoComponent } from '../contact-info/contact-info.component';

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsKey
    }),
    NgbModule,
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
    ContactInfoComponent,
  ],
  exports: [PathComponent],
  entryComponents: [CarouselComponent]

})
export class PathModule { }
