import { Component, OnInit } from '@angular/core';
import { LeaveFeedbackComponent } from '../leave-feedback/leave-feedback.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-inside-challenge',
  templateUrl: './inside-challenge.component.html',
  styleUrls: ['./inside-challenge.component.scss']
})
export class InsideChallengeComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  open() {
    const modalRef = this.modalService.open(LeaveFeedbackComponent);
    // modalRef.componentInstance.image = this.ArrayBs[i].image_url;
  }

}
