import { Component, OnInit } from '@angular/core';
import { LeaveFeedbackComponent } from '../leave-feedback/leave-feedback.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Track, Dish } from '../../interfaces/track';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { PathsService } from '../../services/paths.service';
import { Location } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Business } from '../../interfaces/business';
import { YelpService } from '../../services/yelp.service';
import { Review } from '../../interfaces/review';
import { element } from 'protractor';
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'app-inside-challenge',
  templateUrl: './inside-challenge.component.html',
  styleUrls: ['./inside-challenge.component.scss']
})
export class InsideChallengeComponent implements OnInit {
  challenge: Business;

    track: Track;
    dish: Dish;
    review: Review;

    constructor(
      private modalService: NgbModal,
      private route: ActivatedRoute,
      private router: Router ,
      private location: Location,
      private auth: AuthService,
      private yelp: YelpService,
      private pathService: PathsService) { }

    ngOnInit() {
      this.route.paramMap.subscribe((params: ParamMap) => {
      this.auth.getUserSubject().subscribe(res => this.track = res.paths[params.get('id')]);

      if (this.track) {

        this.challenge = this.track.challenges.filter(bs => bs.id === params.get('challenge'))[0];
        this.dish = this.track.dishes[this.RandomInt(0, 2)];
        this.yelp.YelpReviews(this.challenge.id).subscribe(review => this.review = review);
      }
      });
    }

    statusText(status: number) {
      switch (status) {
        case 0:
          return 'Not started';
        case 1:
          return 'Started';

        case 2:
          return 'Completed';
      }
    }

    getIndex(ch: Business) {
      return this.track.challenges.findIndex(challenge => challenge === ch);
    }

    RandomInt(min, max) {
      return Math.floor(min + Math.random() * (max + 1 - min));
    }

    goBack() {
      this.router.navigate(['/paths', this.track.id]);
    }

  open() {
    const modalRef = this.modalService.open(LeaveFeedbackComponent);
  }

  openImg() {
    const modalRef = this.modalService.open(CarouselComponent);
    modalRef.componentInstance.image = this.challenge.image_url;
  }
}
