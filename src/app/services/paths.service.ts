import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { User } from '../user';
import { Track } from '../interfaces/track';

@Injectable()
export class PathsService {
  url_paths = './assets/paths.json';
  paths: Track[];


  constructor(private http: HttpClient, private auth: AuthService) {
  }

  getPathsInfo() {
     const user: User = this.auth.getUserSubject().getValue();

     if ( user && user.paths) {
       console.log('Memory');
       return Observable.of(user.paths);
     } else {
       console.log('Setting');
      return this.http.get(this.url_paths )
      .map(res => {
        this.paths = <Track[]> res;
        for (let index = 0; index < this.paths.length; index++) {
          this.setPath(this.paths[index]);
        }
        return res;
      })
      .catch(this.handleError);
     }
  }

  setPath(path: Track ) {
    let user = this.auth.getUserSubject().getValue();
    if (user.paths) {
     if ( !this.containsObject(path, user.paths, 'id')) { user.paths.push(path); }
    } else {
      user = {
        ...this.auth.getUserSubject().getValue(),
        paths: [path]
      };
    }
    console.log(user);
    this.auth.getUserSubject().next(user);
  }

  setStatusChallenge(idPath: number, idChallenge: string, status: number) {
    const user = this.auth.getUserSubject().getValue();
    user.paths[idPath].challenges
      .filter(bs => bs.id === idChallenge)[0].status = status;

      this.auth.getUserSubject().next(user);
  }

  getPaths() {
    return this.auth.getUserSubject().getValue().paths;
  }


  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }


  // Utils

  containsObject(obj: any, list: any[], st: string) {
    let i;
    for (i = 0; i < list.length; i++) {
        if (list[i][st] === obj[st]) {
            return obj;
        }
    }

    return false;
  }
}
