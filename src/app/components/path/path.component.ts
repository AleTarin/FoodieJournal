import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PathsService } from '../../services/paths.service';
import { Track } from '../../interfaces/track';
import { ParamMap } from '@angular/router/src/shared';


@Component({
  selector: 'app-path',
  templateUrl: './path.component.html',
  styleUrls: ['./path.component.scss']
})
export class PathComponent implements OnInit {
  track: Track;


  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private pathService: PathsService) { }


  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.pathService.getPathsInfo().subscribe(res => this.track = <Track>res[params.get('id')]);
    });
  }

  goBack(): void {
    this.location.back();
  }

}
