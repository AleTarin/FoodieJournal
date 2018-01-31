import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpErrorResponse, HttpParams, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class YelpService {

  private url_yelp_search = 'https://api.yelp.com/v3/businesses/search/phone';
  private API_KEY = 'Bearer ' + 'SNrlSaWjkv-cHZf_17PQTSbw3gNgahP3lOzmgDVydL7GvxD2r8sf32FMA8' +
'_Oerlg3BoQLQfIMxx0kfZ4zd4BayzRqIliex5PUeTf4x2ZVg0vLLrqSe-_hGfjVqRvWnYx';
  private myHeaders: HttpHeaders;
  private myParams: HttpParams;

  constructor(private http: HttpClient) {

  }

  YelpSearch() {
    this.myHeaders = new HttpHeaders().set('Authorization', this.API_KEY);
    this.myParams = new HttpParams().set('phone', '+14159083801');
    return this.http.get(this.url_yelp_search , {params: this.myParams, headers: this.myHeaders})
    .map(res => {
      console.log(res);
      return res;
    })
    .catch(this.handleError());

  }

  handleError(): any {
  }

}
