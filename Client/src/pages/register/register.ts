import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { TeachersProvider } from '../../providers/teachers/teachers';
import { TokenProvider } from '../../providers/token/token';
import {Storage} from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  public register: FormGroup;
  private Token;


  constructor(public navCtrl: NavController, public navParams: NavParams, private storage : Storage, private fb: FormBuilder, private teacherService: TeachersProvider, private token: TokenProvider) {

    // setting up the register form
    this.register = this.fb.group({
      firstname: new FormControl('', Validators.required),
      middlename: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmpass: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      pnumber: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      class: new FormControl('', Validators.required)
    });
   

  }

  ionViewDidLoad() {
    
   this.storage.get('token').then((val)=>{
       this.Token = val
      console.log(this.Token)
      });
  }

  onSubmit(data) {
    //checking if token is present
    if (this.token) {
      if (data) {
        this.teacherService.addteacher(data, this.Token).subscribe(res =>  res, err => err);
        this.navCtrl.push('TeacherPage',{token: this.Token})
      }
    }else{
    this.navCtrl.push('LoginPage')
  }
  }

}
