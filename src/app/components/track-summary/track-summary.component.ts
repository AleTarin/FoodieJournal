import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-summary',
  templateUrl: './track-summary.component.html',
  styleUrls: ['./track-summary.component.sass']
})
export class TrackSummaryComponent implements OnInit {

  trackIcon: string;
  trackType: string;
  trackDescription: string;
  trackDuration: string;
  completenessPercentage: number;



  constructor() { }

  ngOnInit() {
  }

}
