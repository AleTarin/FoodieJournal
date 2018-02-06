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


 

  trackArray: Track[];

  constructor(private yelpService: YelpService, private pathService: PathsService ) { }

getProgress(){



}
styleBar(){


  
}


  ngOnInit() {
    this.pathService.getPathsInfo().subscribe(res => this.trackArray = <Track[]>res);
    }
}

