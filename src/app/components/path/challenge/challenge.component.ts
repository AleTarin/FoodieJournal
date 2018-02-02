import { Component, OnInit } from '@angular/core';
import { YelpService } from '../../../services/yelp.service';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.scss']
})
export class ChallengeComponent implements OnInit {
  latitude: number;
  longitude: number;
  constructor(private yelpService: YelpService) { }

  ngOnInit() {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(position => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.yelpService.YelpSearch(this.latitude, this.longitude, 'mexican', 1000)
        .subscribe(res => {
          console.log(res);
        });
      });
   }
   this.yelpService.YelpPhoneSearch('+14159083801').subscribe();
  }

}
