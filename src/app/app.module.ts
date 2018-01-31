
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TrackSummaryComponent } from './components/track-summary/track-summary.component';
import { PathModule } from './components/path/path.module';
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
    AppRoutingModule,
    PathModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

