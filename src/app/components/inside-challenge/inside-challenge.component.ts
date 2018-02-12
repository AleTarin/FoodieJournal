import { Component, OnInit } from '@angular/core';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { Track } from '../../interfaces/track';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PathsService } from '../../services/paths.service';
import { Location } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Business } from '../../interfaces/business';

@Component({
  selector: 'app-inside-challenge',
  templateUrl: './inside-challenge.component.html',
  styleUrls: ['./inside-challenge.component.scss']
})
export class InsideChallengeComponent implements OnInit {
  challenge: Business;

    track: Track;
    constructor(
      private route: ActivatedRoute,
      private location: Location,
      private auth: AuthService,
      private pathService: PathsService) { }

    ngOnInit() {
      this.route.paramMap.subscribe((params: ParamMap) => {
      this.auth.getUserSubject().subscribe(res => this.track = res.paths[params.get('id')]);
      this.challenge = this.track.challenges.filter(bs => bs.id === params.get('challenge'))[0];
      console.log(this.challenge);
      });
    }

    goBack(): void {
      this.location.back();
    }
  }


