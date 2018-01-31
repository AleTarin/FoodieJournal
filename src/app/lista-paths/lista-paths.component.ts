import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Output } from '@angular/core/src/metadata/directives';
import { EventEmitter } from 'selenium-webdriver';
import Popper from 'popper.js'; 

@Component({
  selector: 'app-lista-paths',
  templateUrl: './lista-paths.component.html',
  styleUrls: ['./lista-paths.component.sass']
})
export class ListaPathsComponent implements OnInit {


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
