import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
@IonicPage()
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {
  private token;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    this.storage.get('token').then((val) => {
      this.token = val;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminPage');
  }

  teacher(): void {
    if (this.token) {
      this.navCtrl.push('TeacherPage', {token: this.token})
    }
  }

  students(): void {

  }

  reports(): void {
    this.navCtrl.push('ReportsPage');
  }

}
