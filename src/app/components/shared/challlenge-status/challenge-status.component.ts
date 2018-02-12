import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-challenge-status',
  templateUrl: './challenge-status.component.html',
  styleUrls: ['./challenge-status.component.scss']
})
export class ChallengeStatusComponent implements OnInit, OnChanges {

  @Input('id') id: number;
  @Input('status') status: boolean;
  @Input() statusId: string;
  @Input('name') name: string;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit() {
  }

}
