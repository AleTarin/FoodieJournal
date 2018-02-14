import { Component, OnInit, Input } from '@angular/core';
import { Business } from '../../interfaces/business';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.sass']
})
export class ContactInfoComponent implements OnInit {

  @Input() business;

  constructor() { }

  ngOnInit() {
  }

}
