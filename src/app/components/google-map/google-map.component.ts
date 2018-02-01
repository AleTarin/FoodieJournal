import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.sass']
})
export class GoogleMapComponent implements OnInit {
    lat: number;
    lng: number;
    @Input() latitude = 0;
    @Input() longitude = 0;
    @Input() height = '300px';

    constructor() { }
    ngOnInit() {
      this.getUserLocation();

    }
    private getUserLocation() {
     /// locate the user
     if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
         this.lat = position.coords.latitude;
         this.lng = position.coords.longitude;
       });
     }
   }
 }
