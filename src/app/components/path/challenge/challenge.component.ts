import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { YelpService } from '../../../services/yelp.service';
import { Track } from '../../../interfaces/track';
import { Business } from '../../../interfaces/business';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.scss']
})
export class ChallengeComponent implements OnInit, OnChanges {

  latitude: number;
  longitude: number;
  ArrayBs: Business[];
  @Input() path: Track;

  constructor(private yelpService: YelpService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.path.currentValue !== undefined) {
      if (window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(position => {
          // Save the latitude to use
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
          console.log(this.path);
          // Search by location and categorie, the radius can change
          this.yelpService.YelpSearch(this.latitude, this.longitude, this.path.categories, 10000)
          .subscribe(res => {
            // Save the bussinesses to use in the template
            this.ArrayBs = res;
            console.log(this.ArrayBs);
          });
        });
      }
    }
  }

  ngOnInit() {

  }
}
