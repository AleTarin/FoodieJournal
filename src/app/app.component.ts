import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { YelpService } from './services/yelp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private yelpService: YelpService) {}

  ngOnInit(): void {
    this.yelpService.YelpSearch().subscribe();
  }

}
