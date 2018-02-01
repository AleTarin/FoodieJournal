import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GoogleMapsService {
  // Token de GoogleMaps de API exclusivo para la aplicacion
  private API_KEY = 'AIzaSyD_z0Hhy3U-h9og7UKuLtOvM4UxUdDThS0';

  private  url_geolocate: string;
  private myHeaders: HttpHeaders;
  private myParams: HttpParams;

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }

}
