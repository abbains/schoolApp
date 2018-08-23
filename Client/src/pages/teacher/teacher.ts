import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { TeachersProvider } from '../../providers/teachers/teachers'
import { FormControl } from '@angular/forms';
import { TokenProvider } from '../../providers/token/token';

/**
 * Generated class for the TeacherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teacher',
  templateUrl: 'teacher.html',
})
export class TeacherPage {

  private teachers = [];
  searchControl: FormControl;
  teach: any;
  token;



  constructor(public navCtrl: NavController, public navParams: NavParams, private teacherService: TeachersProvider, public loading: LoadingController, private Token : TokenProvider) {
    this.searchControl = new FormControl();
    console.log('hello');
    this.token = this.Token.getToken();
    // console.log(this.token)
    
    this.token = this.navParams.get('token');
  }
  
  ionViewDidLoad() {
    //calling backend service
    console.log(this.token)
    this.teacherService.getTeachers(this.token).subscribe(
      res => {
        this.teachers = res.data;
         console.log(this.teachers);
      },
      err => {
        console.log(err)
      }
    )   
  }

  addTeacher(): void {
    this.navCtrl.push(RegisterPage);
  }


  edit(data) {
    console.log(data);
    this.navCtrl.push('EditTeacherPage', { teacher: data })
  }


}
