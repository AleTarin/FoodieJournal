import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-path-controls',
  templateUrl: './path-controls.component.html',
  styleUrls: ['./path-controls.component.sass']
})
export class PathControlsComponent implements OnInit {

  buttonState: number;
  buttonText: string = "Mark as Started";
  color: string = "#FE5140";
  letterColor: string = "black";
  disabled: boolean = false;


  setText() {

    var text: string;

    if (this.buttonState == 0) {

      text = "Mark as Started";
      this.color = "#FE5140";
      return text;

    }

    if (this.buttonState == 1) {

      text = "Mark as Completed";
      this.color = "#41B9FE";
      return text;
    }

    if (this.buttonState == 2) {

      text = " Way to go! Take the next challenge";
      this.color = "#f2f2f2";
      return text;
    }
  }






  challengeClicked() {

    if (this.buttonState == 0) {
      this.buttonState++;
      this.buttonText = "Mark as completed";
      localStorage.setItem('prueva', JSON.stringify(this.buttonState));
      this.color = "#41B9FE";

      return;
    }
    if (this.buttonState == 1) {
      this.buttonState++;
      this.buttonText = " Way to go! Take the next challenge";
      localStorage.setItem('prueva', JSON.stringify(this.buttonState));
      this.color = "#f2f2f2";

    }

  }





  constructor() { }

  ngOnInit() {
    //localStorage.clear();


    this.buttonState = JSON.parse(localStorage.getItem('prueva'));
    console.log(this.buttonState);


    if (this.buttonState) {
      console.log("button state found");
      // do something with the state
    }
    else {
      console.log("button state not found");
      this.buttonState = 0;
      // do something without the sideBar
    }

    this.buttonText = this.setText();





  }






}
