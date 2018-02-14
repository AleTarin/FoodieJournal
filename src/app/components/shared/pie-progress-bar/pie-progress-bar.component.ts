import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { User } from '../../../user';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { PathsService } from '../../../services/paths.service';
import { AuthService } from '../../../services/auth.service';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
@Component({
  selector: 'app-pie-progress-bar',
  templateUrl: './pie-progress-bar.component.html',
  styleUrls: ['./pie-progress-bar.component.less']
})
export class PieProgressBarComponent implements OnInit, OnChanges {
  i: number;

  @Input() imagen;
  @Input() progress;
  @Input() pathId;
  private userSubject: BehaviorSubject<User>;
  myProfile: User;

  myClass = 'pie-wrapper pie-wrapper--solid progress-0';
  constructor(private auth: AuthService, private pathService: PathsService) {

   }



  ngOnChanges(changes: SimpleChanges): void {


      if ( changes.progress && changes.progress.currentValue ) {
        console.log(changes.progress.currentValue);
      }

      this.setPieValue();
  }

  setPieValue() {
    this.i = this.progress % 10;

    if (this.i <= 5) {
      this.progress -= this.i;

    }

    if (this.i >= 6) {
      this.i = 10 - this.i;
      this.progress += this.i;
    }
    this.myClass = 'pie-wrapper pie-wrapper--solid progress-' + this.progress;
  }

  ngOnInit() {
  }

}
