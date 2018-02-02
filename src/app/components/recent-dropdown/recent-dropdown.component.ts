import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent-dropdown',
  templateUrl: './recent-dropdown.component.html',
  styleUrls: ['./recent-dropdown.component.sass']
})
export class RecentDropdownComponent implements OnInit {
//@Output() selectedPath= new EventEmitter();
  //@Input()pathList;
  hide=true;
  pathSelected="American";

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
this.hide=true;
this.pathSelected=name;


  }
  showPaths(){
    if(this.hide==true)
  this.hide=false;
else{
  this.hide=true;
}
  }

}
