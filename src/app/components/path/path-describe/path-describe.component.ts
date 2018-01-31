import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-path-describe',
  templateUrl: './path-describe.component.html',
  styleUrls: ['./path-describe.component.scss']
})
export class PathDescribeComponent implements OnInit {
  path = {
    title: 'American',
    // tslint:disable-next-line:max-line-length
    description: 'One caracteristic of American cooking is the fusion of multiple ethinc or religon approches into completely new cooking stlye',
    duration: '3 Weeks'
  };
  constructor() { }

  ngOnInit() {
  }

}
