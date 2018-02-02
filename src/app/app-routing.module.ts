import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TrackSummaryComponent } from './components/track-summary/track-summary.component';
import { PathComponent } from './components/path/path.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'paths', component: TrackSummaryComponent},
  {path: 'paths/:id', component: PathComponent , children: [
    {path: '', component: PathComponent}
  ]},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
