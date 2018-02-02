import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-paths',
  templateUrl: './list-paths.component.html',
  styleUrls: ['./list-paths.component.sass']
})
export class ListPathsComponent implements OnInit {
//@Output() selectedPath= new EventEmitter();
  //@Input()pathList;
  pathList =[
    {"name": "American" },
    {"name": "Korean" },
    {"name": "Mexican" },
    {"name": "Italian" },
    {"name": "Japanese" }
  ]

  constructor() { }


  ngOnInit() {

  }
  pathClicked(name ){
console.log(name);



  }

}
