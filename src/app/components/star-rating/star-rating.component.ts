import {
  Component,
  OnInit,
  Input,
  SimpleChanges
} from '@angular/core';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.sass']
})
export class StarRatingComponent implements OnInit, OnChanges {


  @Input() business;
  address: string;

  // las 5 estrellas, el 6to boleano representa si hay una media estrella
  stars: boolean[] = [false, false, false, false, false, false];

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.address = changes.business.currentValue.location.display_address.join(' ');
    this.checa();
  }

  checa() {
    let h = 0;
    for (let i = 0.5; i < this.business.rating; i++) {
      this.stars[i - .5] = true;
      h--;
    }
    if (h === 0.5) {
      this.stars[5] = true;
    }
  }

  ngOnInit() {
  }
}
