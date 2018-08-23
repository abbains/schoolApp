import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';
import { AdminPage } from '../admin/admin';
import { Storage } from '@ionic/storage';


import { RegisterPage } from '../register/register';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public loginForm: FormGroup;
  private teacher: boolean;
  private store: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController, private formBuilder: FormBuilder,
    private loginService: LoginProvider, private storage: Storage) {

    this.teacher = this.navParams.get('teacher');
    console.log(this.teacher);
    //setting up login feilds
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }


  ionViewDidLoad() {
  }

  onSubmit(data) {
    if (this.teacher) {
      this.loginService.loginTeacher(data, ).subscribe(
        res => {
          //recieving token
          this.store = res.token;

          //setting up token
          this.storage.set('token', this.store);
        },
        err => {
          console.log(err);
          this.navCtrl.push('LoginPage');
        }
      )
    } else {
      this.loginService.loginAdmin(data).subscribe(
        res => {
          //recieving token
          this.store = res.token;

          //setting up token
          this.storage.set('token', this.store);
          this.navCtrl.push(AdminPage);
        },
        err => {
          console.log(err);
          
        })
      
    }
  }




  registerPage() {
    this.navCtrl.push(RegisterPage);
  }


}
