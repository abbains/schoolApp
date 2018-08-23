import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { ReactiveFormsModule } from '@angular/forms';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AdminPage } from '../pages/admin/admin';
import { LoginPageModule } from '../pages/login/login.module';
import { TabsPage } from '../pages/tabs/tabs';
import { EventsPageModule } from '../pages/events/events.module';
import { ParentPageModule } from '../pages/parent/parent.module';
import { TeachersProvider } from '../providers/teachers/teachers';
import { HttpClientModule } from '@angular/common/http';
import { LibraryPageModule } from '../pages/library/library.module';
import { ClassPageModule } from '../pages/class/class.module';
import { PipesModule } from '../pipes/pipes.module'
import { LoginProvider } from '../providers/login/login';
import { IonicStorageModule } from '@ionic/storage';
import { CommonProvider } from '../providers/common/common';
import { TokenProvider } from '../providers/token/token';
// import { SearchPipe } from '../pipes/search/search';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    TabsPage,
    AdminPage
    // SearchPipe
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    ReactiveFormsModule,
    LoginPageModule, 
    EventsPageModule,
    ParentPageModule,
    HttpClientModule,
    LibraryPageModule,
    ClassPageModule ,
    PipesModule  
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    TabsPage,
    AdminPage  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TeachersProvider,
    LoginProvider,
    CommonProvider,
    TokenProvider
  ]
})
export class AppModule {}
