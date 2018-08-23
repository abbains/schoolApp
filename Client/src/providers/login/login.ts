import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { CommonProvider } from '../common/common';


/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {

  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type':  'application/json',
  //     'Authorization': 'my-auth-token'
  //   })
  // };

  private configUrl = '/endpoints/teacher/api/login';
  private configUrlAdmin = '/endpoints/api/login/admin';
  

  constructor(public http: HttpClient) {
    
  }

  loginTeacher(teacher){
    return this.http.post(this.configUrl,{
    teacher:  teacher,
    }).pipe(
      map(res => res),
      catchError(this.handleError)
  )
  }

  loginAdmin(admin){
    return this.http.post(this.configUrlAdmin,
      admin
      ).pipe(
      map(res => res),
      catchError(this.handleError)
  )
  }

  //Error handler
  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const err = error || '';
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    // console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
