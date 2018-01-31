import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpErrorResponse, HttpParams, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { Console } from '@angular/core/src/console';

@Injectable()
export class YelpService {


  // Token de la yelp de API exclusivo para la aplicacion
  private API_KEY = 'Bearer ' + 'SNrlSaWjkv-cHZf_17PQTSbw3gNgahP3lOzmgDVydL7GvxD2r8sf32FMA8' +
  '_Oerlg3BoQLQfIMxx0kfZ4zd4BayzRqIliex5PUeTf4x2ZVg0vLLrqSe-_hGfjVqRvWnYx';

  private  url_yelp: string;
  private myHeaders: HttpHeaders;
  private myParams: HttpParams;
  private longitude: number;
  private latitude: number;

  constructor(private http: HttpClient) {
    this.myHeaders = new HttpHeaders().set('Authorization', this.API_KEY);
  }

  YelpPhoneSearch(phone: string) {
    this.url_yelp = 'https://api.yelp.com/v3/businesses/search/phone';
    this.myParams = new HttpParams().set('phone', phone);
    return this.http.get(this.url_yelp , {params: this.myParams, headers: this.myHeaders})
    .map(res => {
      console.log(res);
      return res;
    })
    .catch(this.handleError);
  }

  YelpSearch(lat: number , long: number , cat: string, radius: number ) {
    this.setLocation();
    this.url_yelp = 'https://api.yelp.com/v3/businesses/search';
    this.myParams = new HttpParams().append('term', '"food","restaurants"')
    .append('categories', cat)
    .append('limit', '10')
    .append('radius', String(radius))
    .append('latitude', String(lat))
    .append('longitude', String(long));

    return this.http.get(this.url_yelp , {params: this.myParams, headers: this.myHeaders})
    .map(res => {
      console.log(res);
      return res;
    })
    .catch(this.handleError);
  }

  setLocation() {

  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }

}
