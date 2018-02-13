import {
  Component,
  OnInit,
  Input,
  SimpleChanges
} from '@angular/core';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { AuthService } from '../../services/auth.service';
import { User } from '../../user';
@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.sass']
})
export class StarRatingComponent implements OnInit, OnChanges {
myProfile: User;
  @Input() business;
  address: string;
  // las 5 estrellas, el 6to boleano representa si hay una media estrella
  stars: boolean[] = [false, false, false, false, false, false];
  constructor(private auth: AuthService) {
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.business.currentValue) {
      this.address = changes.business.currentValue.location.display_address.join(' ');
      this.checa(changes);
    }
  }
  checa(changes: SimpleChanges) {
    let h = 0;
    console.log(h);
    for (let i = 0.5; i < changes.business.currentValue.rating; i++) {
      this.stars[i - .5] = true;
      h--;
    }
    if (h === 0.5) {
      this.stars[5] = true;
    }
  }
  ngOnInit() {
    // console.log(this.myProfile.paths[0].challenges[0].price);
  }
}
