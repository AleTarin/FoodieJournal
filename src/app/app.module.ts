
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

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
import { LoginService } from './services/login/login.service';
import { AgmCoreModule } from '@agm/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { GoogleMapComponent } from './components/google-map/google-map.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ModalComponent } from './components/modal/modal.component';
import { PathsDropdownComponent } from './paths-dropdown/paths-dropdown.component';
import { ListaPathsComponent } from './lista-paths/lista-paths.component';
// import { MapComponent } from './map/map.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    TrackSummaryComponent,
    GoogleMapComponent,
    CarouselComponent,
    ModalComponent,
    ListaPathsComponent,
    PathsDropdownComponent,
    // MapComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
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
    PathModule,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

