import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-pie-progress-bar',
  templateUrl: './pie-progress-bar.component.html',
  styleUrls: ['./pie-progress-bar.component.scss']
})
export class PieProgressBarComponent implements OnInit {
  @Input() imagen;

  constructor() { }

  ngOnInit() {
  }

}
