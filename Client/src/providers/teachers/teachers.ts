import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { CommonProvider } from '../common/common';
/*
  Generated class for the TeachersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/


@Injectable()
export class TeachersProvider {
  

  private configUrl = '/endpoints/api/teacher';
  private updateURL = '/endpoints/api/teacher/update'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',

    })
  };
  constructor(public http: HttpClient, private commonService: CommonProvider) {
  }

  getTeachers(token){
    return this.commonService.getMethod(this.configUrl, token);
  }

  addteacher(description, token){
    return this.commonService.addMethod(this.configUrl, token, description);
  }

  deleteTeacher(id, token){
    return this.commonService.deleteMethod(id, token, this.configUrl)
  }

  updateTeacher(id, token){
    return this.commonService.updateMethod(id, token, this.updateURL)
  }

}
