import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { PathsService } from '../../services/paths.service';
import { Track } from '../../interfaces/track';

@Component({
  selector: 'app-list-paths',
  templateUrl: './list-paths.component.html',
  styleUrls: ['./list-paths.component.sass']
})
export class ListPathsComponent implements OnInit, OnChanges{



  @Input() paths: Track[];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    //console.log(changes.paths.currentValue);
  }

  ngOnInit() {
  }

  pathClicked(name ) {
  }

}
