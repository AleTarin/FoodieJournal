import { Component, OnInit, Input } from '@angular/core';
import { PathsService } from '../../services/paths.service';
import { Track } from '../../interfaces/track';

@Component({
  selector: 'app-list-paths',
  templateUrl: './list-paths.component.html',
  styleUrls: ['./list-paths.component.sass']
})
export class ListPathsComponent implements OnInit {

  @Input() paths: Track[];

  constructor() { }


  ngOnInit() {

  }

  pathClicked(name ) {
  }

}
