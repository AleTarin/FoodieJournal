import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PathComponent } from './path.component';
import { PathDescribeComponent } from './path-describe/path-describe.component';
import { ChallengeComponent } from './challenge/challenge.component';
import { ChallengeStatusComponent } from '../shared/challlenge-status/challenge-status.component';
import { GoogleMapComponent } from '../google-map/google-map.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../../environments/environment';
import { AgmCoreModule } from '@agm/core';
import { ModalComponent } from '../modal/modal.component';
import { CarouselComponent } from '../carousel/carousel.component';

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsKey
    })
  ],
  declarations: [
    PathComponent,
    PathDescribeComponent,
    ChallengeComponent,
    ChallengeStatusComponent,
    GoogleMapComponent,
    CarouselComponent,
    ModalComponent
  ],
  exports: [PathComponent]
})
export class PathModule { }
