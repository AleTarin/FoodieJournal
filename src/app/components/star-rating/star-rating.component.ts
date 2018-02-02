import { Component, OnInit, Input } from '@angular/core';
 


@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.sass']
})
export class StarRatingComponent implements OnInit {

  //recibiremos un objeto del restaorante
  //@Input() busines;





business = {
    "name": "Frankie's",
    "rating" : 4.5,
    "reviews": "126", 
    "description": "nice burgers",
    "address": "123 fake st San Francisco, CA 94103" 

}

//las 5 estrellas, el 6to boleano representa si hay una media estrella
stars: boolean[] = [false, false, false, false, false, false];


  constructor() {



   }
   checa(){
  let h= this.business.rating ;
    for ( let i = 0.5; i < this.business.rating; i++) {
      this.stars[i-.5]=true;
      console.log(this.stars[i-0.5]);
      h--;
      
  }
if(h== 0.5){

  this.stars[5]=true;
  console.log(".5")
}


    
   }

  ngOnInit() {

    this.checa();
    
  

  }

}
