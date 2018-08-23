import { Component } from '@angular/core';

import { NavController,ActionSheetController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ParentPage } from '../parent/parent';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  

  constructor(public navCtrl: NavController, public actionSheetCtrl: ActionSheetController) {

  }
 
 parent():void{
  this.navCtrl.push(ParentPage);
 }

 teacher():void{ 
  this.navCtrl.push(LoginPage, {teacher : true} );
 }

 admin():void{
  this.navCtrl.push(LoginPage);
 }

}
