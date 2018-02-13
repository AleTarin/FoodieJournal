import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { YelpService } from '../../../services/yelp.service';
import { Track } from '../../../interfaces/track';
import { Business } from '../../../interfaces/business';
import { NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from '../../carousel/carousel.component';
import 'rxjs/add/operator/concatMap';


import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../../services/auth.service';
import { Path } from '@firebase/database/dist/esm/src/core/util/Path';
import { PathsService } from '../../../services/paths.service';
import { ParamMap, NavigationStart, NavigationEnd } from '@angular/router';
import { ActivatedRoute, Event, Router} from '@angular/router/';
import {Location} from '@angular/common';



@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.scss']
})
export class ChallengeComponent implements OnInit {

  latitude: number;
  longitude: number;
  ArrayBs: Business[];
  @Input() path: Track;

  constructor(
    private yelpService: YelpService,
    private modalService: NgbModal,
    private auth: AuthService,
    private pathService: PathsService,
    private route: ActivatedRoute,
    private location: Location,
    ) { }

  yelpSearchAll(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.pathService.getPathsInfo().subscribe(paths => {
        this.path = <Track>paths[params.get('id')];
        this.yelpService.YelpSearch(this.latitude, this.longitude, this.path.categories, 10000, this.path.id)
        .subscribe(res => {
          this.ArrayBs = res;
          this.path.challenges = res;
          this.pathService.setPath(this.path);
        });
      });
    });
  }

  public getPathSelected(): boolean {
    return this.path.id === this.auth.getUserSubject().getValue().journey;
  }


  ngOnInit() {
    this.location.subscribe(x => console.log(x));

    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(position => {
        // Save the latitude to use
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.yelpSearchAll();
      });
    }

  }

  open(i: number) {
    const modalRef = this.modalService.open(CarouselComponent);
    modalRef.componentInstance.image = this.ArrayBs[i].image_url;
  }
}
