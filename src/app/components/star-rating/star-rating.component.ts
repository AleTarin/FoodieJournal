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
  stars: boolean[] = [true, true, true, true, true, true];

  constructor(private auth: AuthService) {


    this.myProfile = this.auth.getUserSubject().getValue();


  }

  ngOnChanges(changes: SimpleChanges): void {
    this.address = changes.business.currentValue.location.display_address.join(' ');
    this.checa();
  }

  checa() {
    let h = this.myProfile.paths[0].challenges[0].rating;
    for (let i = 0.5; i < 2; i++) {
      this.stars[i - .5] = true;
      h--;
    }
    if (h === 0.5) {
      this.stars[5] = true;
    }
  }

  ngOnInit() {
    console.log("hola");
    console.log(this.myProfile.paths[0].challenges[0].rating);
    console.log(this.stars);
    //console.log(this.myProfile.paths[0].challenges[0].price);

  }
}
