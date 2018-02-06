import { Component, OnInit } from '@angular/core';
import { Track } from '../../interfaces/track';
import { YelpService } from '../../services/yelp.service';
import { PathsService } from '../../services/paths.service';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-track-summary',
  templateUrl: './track-summary.component.html',
  styleUrls: ['./track-summary.component.sass']
})
export class TrackSummaryComponent implements OnInit {
  longitude: number;
  latitude: number;
  width: string;


 

  trackArray: Track[];

  constructor(private yelpService: YelpService, private pathService: PathsService ) { }

getProgress(){



}

//aqui recibimos el progreso del usuario
public styleBar(){
  //por ahora esta hardcodeado
  var letters = '40%'
  
  
  return letters;

 

  
}

setWidth(){
this.width=this.styleBar();

}


  ngOnInit() {
    this.pathService.getPathsInfo().subscribe(res => this.trackArray = <Track[]>res);
    this.setWidth();
    localStorage.setItem('paths', JSON.stringify(this.trackArray));
  }
}

