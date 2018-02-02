import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PathsService } from '../../services/paths.service';
import { Track } from '../../interfaces/track';


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
    const id = +this.route.snapshot.paramMap.get('id');
    this.pathService.getPathsInfo().subscribe(res => this.track = <Track>res[id]);
  }

  goBack(): void {
    this.location.back();
  }

}
