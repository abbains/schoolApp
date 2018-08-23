import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditTeacherPage } from './edit-teacher';

@NgModule({
  declarations: [
    EditTeacherPage,
  ],
  imports: [
    IonicPageModule.forChild(EditTeacherPage),
  ],
})
export class EditTeacherPageModule {}
