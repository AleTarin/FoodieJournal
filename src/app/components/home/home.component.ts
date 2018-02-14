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
    localStorage.setItem('newLoggin', '1');

   }

}
