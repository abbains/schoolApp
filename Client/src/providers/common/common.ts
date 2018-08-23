import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

/*
  Generated class for the CommonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CommonProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CommonProvider Provider');
  }

  getMethod(URL, Token): Observable<any> {
    return this.http.get(URL, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': Token
      })
    }).pipe(
      map(res => res),
      catchError(this.handleError)
    )
  }

  // Add method
  addMethod(URL, Token, description): Observable<any> {
    return this.http.post(URL, {
        description: description,
        token: Token
    }).pipe(
      map(res => res),
      catchError(this.handleError)
    )
  }

  // Delete Method
  deleteMethod(id, Token, URL): Observable<any> {
    return this.http.delete(`${URL}/${id}`,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'x-access-token': Token
        })
      }
    ).pipe(
      map(res => res),
      catchError(this.handleError)
    )
  }

  updateMethod(id, Token, URL):Observable<any>{
    return this.http.patch(`${URL}/${id}`,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': Token
      })
    }).pipe(
      map(res=> res),
      catchError(this.handleError)
    )
  }



  //Error handler
  private handleError(error: Response | any) {
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
