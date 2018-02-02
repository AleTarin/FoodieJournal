import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-challenge-status',
  templateUrl: './challenge-status.component.html',
  styleUrls: ['./challenge-status.component.scss']
})
export class ChallengeStatusComponent implements OnInit {
  @Input('id') id: number;
  @Input('status') status: boolean;
  @Input('name') name: string;

  constructor() { }
  ngOnInit() {

  }

}
