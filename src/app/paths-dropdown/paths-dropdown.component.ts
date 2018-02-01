import { Component, OnInit } from '@angular/core';
import 'bootstrap';



@Component({
  selector: 'app-paths-dropdown',
  templateUrl: './paths-dropdown.component.html',
  styleUrls: ['./paths-dropdown.component.sass']
})
export class PathsDropdownComponent implements OnInit {

 //@Output() selectedPath= new EventEmitter();
  //@Input()pathList;
  pathList =[
    {"name": "American" },
    {"name": "Korean" },
    {"name": "Italian" },
    {"name": "Japanese" },
    {"name": "Chinese" }
  ]

  constructor() { }


  ngOnInit() {

  }
  pathClicked(name){
console.log(name);

  }

}
