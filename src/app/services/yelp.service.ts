import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpErrorResponse, HttpParams, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { Console } from '@angular/core/src/console';
import { environment } from '../../environments/environment';
import { Review } from '../interfaces/review';
import { Business } from '../interfaces/business';

@Injectable()
export class YelpService {


  // Token de la yelp de API exclusivo para la aplicacion
  private API_KEY = 'Bearer FUNofMVIf4wZoh3SwQ0pGttt08P97wC3Ooz0xuqsy5HY6mavQoXvxA8dUHh7nNdPZ-yHtomdWH' +
  '-edmpgdOZvF6E9I2zvB_PKyuZxGWc_ygyOhPcACUzv3Vtm6kxyWnYx';

  private  url_yelp: string;
  private myHeaders: HttpHeaders;
  private myParams: HttpParams;
  private longitude: number;
  private latitude: number;

  constructor(private http: HttpClient) {
    this.myHeaders = new HttpHeaders().set('Authorization', this.API_KEY);
  }

  YelpPhoneSearch(phone: string): Observable<Business> {
    this.url_yelp = 'https://api.yelp.com/v3/businesses/search/phone';
    this.myParams = new HttpParams().set('phone', phone);
    return this.http.get<Business>(this.url_yelp , {params: this.myParams, headers: this.myHeaders})
    .map(res => {
      return res;
    })
    .catch(this.handleError);
  }

  YelpSearch(lat: number , long: number , cat: string, radius: number ): Observable<Business[]> {
    this.url_yelp = 'https://api.yelp.com/v3/businesses/search';
    this.myParams = new HttpParams().append('term', '"food","restaurants"')
      .append('categories', cat)
      .append('limit', '10')
      .append('radius', String(radius))
      .append('latitude', String(lat))
      .append('longitude', String(long));

    return this.http.get<Business[]>(this.url_yelp , { params: this.myParams, headers: this.myHeaders})
    .map(res => {
      return res['businesses'];
    })
    .catch(this.handleError);
  }

  YelpBusiness(id: string): Observable<Business> {
    this.url_yelp = 'https://api.yelp.com/v3/businesses/' + id;
    this.myParams = new HttpParams();
    return this.http.get<Business>(this.url_yelp , {params: this.myParams, headers: this.myHeaders})
    .map(res => {
      return res;
    })
    .catch(this.handleError);
  }

  YelpReviews(id: string): Observable<Review> {
    this.url_yelp = 'https://api.yelp.com/v3/businesses/' + id + '/reviews';
    this.myParams = new HttpParams();
    return this.http.get<Review>(this.url_yelp , {params: this.myParams, headers: this.myHeaders})
    .map(review => {
      return review['reviews'][0];
    })
    .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
