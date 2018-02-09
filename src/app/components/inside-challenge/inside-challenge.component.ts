import { Component, OnInit } from '@angular/core';
import { Track } from '../../interfaces/track';
import { Business } from '../../interfaces/business';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { PathsService } from '../../services/paths.service';

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
    private auth: AuthService,
    private pathService: PathsService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
    this.auth.getUserSubject().subscribe(res => this.track = res.paths[params.get('id')]);
    this.challenge = this.track.challenges.filter(bs => bs.id === params.get('challenge'))[0];
    console.log(this.challenge);
    });
  }
}