import { Component, SimpleChanges } from '@angular/core';
import { OnInit, OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { YelpService } from './services/yelp.service';
import { GoogleMapsService } from './services/google-maps.service';
import { Business } from './interfaces/business';
import { Review } from './interfaces/review';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  token: string;

  review: Review;
  businesses: Business[];
  business: Business;
  latitude: number;
  longitude: number;

  constructor(private auth: AuthService) {
  }

  ngOnInit() {
  }
}


