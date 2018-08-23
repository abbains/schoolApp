import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { TeachersProvider } from '../../providers/teachers/teachers';
import {Storage} from '@ionic/storage';

/**
 * Generated class for the EditTeacherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-teacher',
  templateUrl: 'edit-teacher.html',
})
export class EditTeacherPage {
   editTeacher: FormGroup;
   token:any;
   teacher: any;

  constructor(private storage : Storage,public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder, private teacherService: TeachersProvider) {

    this.editTeacher = this.fb.group({
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
    })
    //setting up value from teacher 
    this.teacher = this.navParams.get('teacher');

    this.storage.get('token').then((val) => {
      this.token = val;
      console.log(this.token);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditTeacherPage');
  }

  delete(id) {
    this.teacherService.deleteTeacher(id,this.token).subscribe(res => {
      console.log(res);
    });
    this.navCtrl.push('TeacherPage',{token : this.token})
  }

  onSubmit(data, id){
    console.log(id);
    if(data){
      this.teacherService.updateTeacher(id,this.token).subscribe(res=>{
        console.log(res);
      });
      this.navCtrl.push('TeacherPage',{token : this.token})
    }
  }

}
