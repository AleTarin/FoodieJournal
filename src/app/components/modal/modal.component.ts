import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent implements OnInit {

  @Input() tipo = 'carousel';
  @Input() latitude = 0;
  @Input() longitude = 0;
  @Input() height = '300px';

  constructor() { }

  ngOnInit() {
  }

}
