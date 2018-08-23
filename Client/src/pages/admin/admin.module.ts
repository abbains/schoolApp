import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminPage } from './admin';
import {TeacherPageModule} from '../teacher/teacher.module';
import {ReportsPageModule} from '../reports/reports.module';

@NgModule({
  declarations: [
    AdminPage,
  ],
  imports: [
    TeacherPageModule,
    ReportsPageModule,
    IonicPageModule.forChild(AdminPage),
  ],
})
export class AdminPageModule {}
