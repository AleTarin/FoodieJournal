import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ListaPathsComponent } from './lista-paths/lista-paths.component';
import { PathsDropdownComponent } from './paths-dropdown/paths-dropdown.component';



@NgModule({
  declarations: [
    AppComponent,
    ListaPathsComponent,
    PathsDropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
