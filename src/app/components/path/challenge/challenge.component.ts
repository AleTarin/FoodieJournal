import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { YelpService } from '../../../services/yelp.service';
import { Track } from '../../../interfaces/track';
import { Business } from '../../../interfaces/business';
import { NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from '../../carousel/carousel.component';
import 'rxjs/add/operator/concatMap';


import { Observable } from 'rxjs/Observable';


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

  constructor(private yelpService: YelpService, private modalService: NgbModal) { }

  getLocation(changes: SimpleChanges): void {
    if (changes.path.currentValue !== undefined) {
      if (window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(position => {
          // Save the latitude to use
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
          this.yelpSearchAll();
        });
      }
    }
  }

  yelpSearchAll(): void {
    // Save the bussinesses to use in the template
    this.yelpService.YelpSearch(this.latitude, this.longitude, this.path.categories, 10000)
    .subscribe(res => this.ArrayBs = res);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getLocation(changes);
  }

  ngOnInit() {}

  open(i: number) {
    const modalRef = this.modalService.open(CarouselComponent);
    modalRef.componentInstance.image = this.ArrayBs[i].image_url;
  }
}
