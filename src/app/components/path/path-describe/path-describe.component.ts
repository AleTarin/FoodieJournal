import { Component, OnInit, Input } from '@angular/core';
import { Track } from '../../../interfaces/track';
import { PathsService } from '../../../services/paths.service';


@Component({
  selector: 'app-path-describe',
  templateUrl: './path-describe.component.html',
  styleUrls: ['./path-describe.component.scss']
})
export class PathDescribeComponent implements OnInit {
  @Input() path: Track;
  paths: Track[];

  constructor(private pathService: PathsService, ) { }

  // constructor(private yelpService: YelpService, private pathService: PathsService, ) {

  //   this.myProfile = this.auth.getUserSubject().getValue();
  //   this.pathService.getPathsInfo().subscribe(res => this.trackArray = <Track[]>res);
  //   this.zero = 0;
  //  }

  // public styleBar(i: number) {
  //   this.width = this.myProfile.paths[i].completenessPercentage + '%';
  //   return this.width;
  // }

  ngOnInit() {
    this.pathService.getPathsInfo().subscribe(res => this.paths = <Track[]>res);
  }

}
