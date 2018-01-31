import { Component, OnInit } from '@angular/core';
import { Track } from '../../interfaces/track';

@Component({
  selector: 'app-track-summary',
  templateUrl: './track-summary.component.html',
  styleUrls: ['./track-summary.component.sass']
})
export class TrackSummaryComponent implements OnInit {

  trackArray: Track[];

  constructor() { }

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

