import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PathsService {
  url_paths = './assets/paths.json';


  constructor(private http: HttpClient) {
  }

  getPathsInfo() {
    return this.http.get(this.url_paths )
    .map(res => {
      return res;
    })
    .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
