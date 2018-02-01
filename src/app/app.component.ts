import { Component, SimpleChanges } from '@angular/core';
import { OnInit, OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { YelpService } from './services/yelp.service';
import { GoogleMapsService } from './services/google-maps.service';
import { Business } from './interfaces/business';
import { Review } from './interfaces/review';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  review: Review;
  businesses: Business[];
  business: Business[];

  constructor(private yelpService: YelpService, private mapsService: GoogleMapsService) {
  }

  ngOnInit() {
    this.getBusiness('mexican', 10000);
  }

  private getBusiness(category: string, radius: number) {
    /// locate the user
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.searchBusiness(position.coords, category, radius);
      });
    }
  }

 private searchBusiness(location: Coordinates, category: string, radius: number) {
  this.yelpService.YelpSearch(location.latitude, location.longitude, 'mexican', 10000)
  .subscribe(res => {
      this.businesses = res;
      // console.log(this.businesses);
      this.yelpService.YelpBusiness(this.businesses[2].id).subscribe(res2 => this.business = res2);
      this.yelpService.YelpReviews(this.businesses[1].id).subscribe(res3 => this.review = res3);
  });
 }

}
