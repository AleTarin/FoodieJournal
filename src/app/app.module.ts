import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TrackSummaryComponent } from './components/track-summary/track-summary.component';
import { PathModule } from './components/path/path.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    TrackSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PathModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
