import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TrackSummaryComponent } from './components/track-summary/track-summary.component';
import { PathComponent } from './components/path/path.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'tracks', component: TrackSummaryComponent},
  {path: 'productos', component: PathComponent , children: [
    {path: '', component: PathComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
