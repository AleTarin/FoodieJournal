import { Component, OnInit } from '@angular/core';
import { Track } from '../../interfaces/track';
import { YelpService } from '../../services/yelp.service';

@Component({
  selector: 'app-track-summary',
  templateUrl: './track-summary.component.html',
  styleUrls: ['./track-summary.component.sass']
})
export class TrackSummaryComponent implements OnInit {
  longitude: number;
  latitude: number;

  trackArray: Track[];

  constructor(private yelpService: YelpService) { }

  ngOnInit() {
    this.trackArray = <Track[]>[{
      icon: 'https://burgerjointhtx.com/wp-content/uploads/2015/07/burger-icon-tight-white.png' ,
      type: '',
      description: '',
      duration: 5,
      completenessPercentage: 5
    },
    {
      icon: 'https://burgerjointhtx.com/wp-content/uploads/2015/07/burger-icon-tight-white.png' ,
      type: '',
      description: '',
      duration: 5,
      completenessPercentage: 5
    },
    {
      icon: 'https://burgerjointhtx.com/wp-content/uploads/2015/07/burger-icon-tight-white.png' ,
      type: '',
      description: '',
      duration: 5,
      completenessPercentage: 5
    },
    {
      icon: 'https://burgerjointhtx.com/wp-content/uploads/2015/07/burger-icon-tight-white.png' ,
      type: '',
      description: '',
      duration: 5,
      completenessPercentage: 5
    }

  ];

  }
}

