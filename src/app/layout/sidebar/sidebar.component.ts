import { Component, OnInit } from '@angular/core';
import {
  faAddressBook,
  faBars,
  faGear,
  faHandHoldingDroplet,
  faPersonCircleCheck,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  faGear = faGear;
  faHand = faHandHoldingDroplet;
  faPerson = faPersonCircleCheck;
  faBars = faBars;
  faAddress = faAddressBook;

  constructor() {
    console.log('Sidebar constructor called');
  }

  ngOnInit() {}
}
