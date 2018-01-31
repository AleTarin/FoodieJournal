import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PathComponent } from './components/path/path.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'productos', component: PathComponent , children: [
    {path: '', component: PathComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
