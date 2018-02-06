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

  constructor(private pathService: PathsService) { }

  ngOnInit() {
    this.pathService.getPathsInfo().subscribe(res => this.paths = <Track[]>res);
  }

}
