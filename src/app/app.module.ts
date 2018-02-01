
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

// Services
import { YelpService } from './services/yelp.service';
import { GoogleMapsService } from './services/google-maps.service';
import { TrackSummaryComponent } from './components/track-summary/track-summary.component';
import { PathModule } from './components/path/path.module';
import { AgmCoreModule } from '@agm/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { GoogleMapComponent } from './components/google-map/google-map.component';
<<<<<<< HEAD
import { CarouselComponent } from './components/carousel/carousel.component';
import { ModalComponent } from './components/modal/modal.component';
=======
import { PathsDropdownComponent } from './paths-dropdown/paths-dropdown.component';
import { ListaPathsComponent } from './lista-paths/lista-paths.component';
>>>>>>> 8ced2f949db71965221c1a02c12965a000ee933b

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    TrackSummaryComponent,
    GoogleMapComponent,
<<<<<<< HEAD
    CarouselComponent,
    ModalComponent
=======
    ListaPathsComponent,
    PathsDropdownComponent
>>>>>>> 8ced2f949db71965221c1a02c12965a000ee933b
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PathModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsKey
    })
  ],
  providers: [
    YelpService,
    GoogleMapsService,
    PathModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

