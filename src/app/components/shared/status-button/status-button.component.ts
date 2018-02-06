import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-button',
  templateUrl: './status-button.component.html',
  styleUrls: ['./status-button.component.scss']
})
export class StatusButtonComponent implements OnInit {
  hasJourney: boolean = true;
  isCompleted: boolean = true;
  buttonLabel: string = "";

  constructor() { 
    this.checkCurrentStatus();
  }

  public checkCurrentStatus(){
    if (!this.hasJourney && !this.isCompleted) {
      this.buttonLabel = "Follow";
    }

    if (this.hasJourney && !this.isCompleted) {
      this.buttonLabel = "Continue";
    }

    if (this.hasJourney && this.isCompleted) {
      this.buttonLabel = "Completed";
    }
  }

  ngOnInit() {
  }

}
