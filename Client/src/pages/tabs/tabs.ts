import { Component } from '@angular/core';


import { HomePage } from '../home/home';
// import { LoginPage } from '../login/login';
import { EventsPage } from '../events/events';
import { LibraryPage } from '../library/library';
import { ClassPage } from '../class/class';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = EventsPage;
  tab2Root = HomePage;
  tab3Root = LibraryPage;
  tab4Root = ClassPage;

  constructor() {

  }
}
