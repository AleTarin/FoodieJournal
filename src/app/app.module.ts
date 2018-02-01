
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
import { PathsDropdownComponent } from './paths-dropdown/paths-dropdown.component';
import { ListaPathsComponent } from './lista-paths/lista-paths.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    TrackSummaryComponent,
    ListaPathsComponent,
    PathsDropdownComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    PathModule
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

