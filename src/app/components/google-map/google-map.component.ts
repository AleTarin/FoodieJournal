import { Component, OnInit, Input} from '@angular/core';
import { SimpleChange } from '@angular/core/src/change_detection/change_detection_util';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.sass']
})
export class GoogleMapComponent implements OnInit {
    lat: number;
    lng: number;
    @Input() latitude = 0;
    @Input() longitude = 0;
    @Input() height = '300px';

    constructor() { }

    ngOnInit() {
    }
  }
