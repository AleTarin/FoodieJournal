import { Component, OnInit, Input} from '@angular/core';
import { Track } from '../../interfaces/track';

@Component({
  selector: 'app-list-dropdown',
  templateUrl: './list-dropdown.component.html',
  styleUrls: ['./list-dropdown.component.sass']
})
export class ListDropdownComponent implements OnInit {

  hide = true;
  @Input() pathSelected: String;
  @Input() paths: Track[];


  // pathList =[
  //   {"name": "American" },
  //   {"name": "Korean" },
  //   {"name": "Italian" },
  //   {"name": "Japanese" },
  //   {"name": "Chinese" }
  // ]

  constructor() { }


  ngOnInit() {

  }

  pathClicked(name) {
    console.log(name);
    this.hide = true;
    this.pathSelected = name;
  }

  showPaths() {
    if (this.hide === true) {
      this.hide = false;
    } else {
      this.hide = true;
    }
  }
}
