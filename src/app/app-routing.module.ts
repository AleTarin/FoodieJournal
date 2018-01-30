import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TrackSummaryComponent } from './components/track-summary/track-summary.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'tracks', component: TrackSummaryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
