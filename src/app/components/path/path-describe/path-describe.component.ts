import { Component, OnInit, Input } from '@angular/core';
import { Track } from '../../../interfaces/track';

@Component({
  selector: 'app-path-describe',
  templateUrl: './path-describe.component.html',
  styleUrls: ['./path-describe.component.scss']
})
export class PathDescribeComponent implements OnInit {
  @Input() path: Track;

  constructor() { }

  ngOnInit() {
  }

}
