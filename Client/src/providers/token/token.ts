import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
/*
  Generated class for the TokenProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TokenProvider {
  public Token : any;
  constructor(public http: HttpClient, private storage: Storage) {
   
  }  
  
  
  async getToken(){
    await this.storage.get('token').then((val)=>{
     console.log(val)
     return val; 
    });
       
  }

 }
