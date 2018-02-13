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
      return this.http.get(this.url_paths )
      .map(res => {
        this.paths = <Track[]> res;
        this.setPaths(this.paths);
        return this.paths;
      })
      .catch(this.handleError);
     }
  }

  setPath(path: Track ) {
    let user = this.auth.getUserSubject().getValue();
    if (user.paths) {
      if ( !this.containsObject(path, user.paths, 'id')) {
        user.paths.push(path);
      } else {
        user.paths[path.id] = path;
      }
    } else {
      user = {
        ...this.auth.getUserSubject().getValue(),
        paths: [path]
      };
    }
    console.log(user);
    this.auth.getUserSubject().next(user);
  }

  setPaths(paths: Track[] ) {
    let user = this.auth.getUserSubject().getValue();
    if (!user.paths) {
      user = {
        ...this.auth.getUserSubject().getValue(),
        paths: paths
      };
    }
    this.auth.getUserSubject().next(user);
  }

  setStatusChallenge(idPath: number, idChallenge: string, status: number) {
    const user = this.auth.getUserSubject().getValue();
    user.paths[idPath].challenges
      .filter(bs => bs.id === idChallenge)[0].status = status;
    user.paths[idPath].completenessPercentage += 10;
      this.auth.getUserSubject().next(user);
  }

  getStatusChallenge(idPath: number, index: number) {
    return (this.auth.getUserSubject().getValue().paths[idPath].challenges[index].status === 2);
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
