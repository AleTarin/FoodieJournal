import { Component, OnInit } from '@angular/core';
import { YelpService } from '../../services/yelp.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  longitude: number;
  latitude: number;

  constructor(private yelpService: YelpService) { }

  ngOnInit(): void {
    if (window.navigator.geolocation) {
       window.navigator.geolocation.getCurrentPosition(position => {
         this.latitude = position.coords.latitude;
         this.longitude = position.coords.longitude;
         this.yelpService.YelpSearch(this.latitude, this.longitude, 'mexican', 1000).subscribe();
       });
    }
    this.yelpService.YelpPhoneSearch('+14159083801').subscribe();
   }

}
