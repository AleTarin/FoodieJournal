import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Track } from '../../interfaces/track';
import { Router } from '@angular/router';
import { EventListener } from '@angular/core/src/debug/debug_node';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-list-dropdown',
  templateUrl: './list-dropdown.component.html',
  styleUrls: ['./list-dropdown.component.sass']
})
export class ListDropdownComponent implements OnInit {

  hide = true;
  @Input() pathSelected: String;
  @Input() paths: Track[];
  


  // pathList =[
  //   {"name": "American" },
  //   {"name": "Korean" },
  //   {"name": "Italian" },
  //   {"name": "Japanese" },
  //   {"name": "Chinese" }
  // ]

  constructor(private router: Router, private auth: AuthService) { }


  ngOnInit() {
    
    //this.auth.changePathId.suscribe
    

  }

  pathClicked(name, id) {
    this.hide = true;
    this.pathSelected = name;

    console.log(id);
    // this.router.navigate(['paths/', id]);
  }

  showPaths() {
    if (this.hide === true) {
      this.hide = false;
    } else {
      this.hide = true;
    }
  }

  navigate(id: number) {
    return false;
  }
}
