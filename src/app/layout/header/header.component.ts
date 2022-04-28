import { Component, OnInit } from '@angular/core';
import { faBell, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  faBell = faBell;
  faUser = faUser;
  dataList: Array<any> = [];
  userList: Array<any> = [];

  constructor() {
    this.dataList = [
      { code: 1, name: 'For Review' },
      { code: 2, name: 'Approved' },
      { code: 3, name: 'Rejected' },
    ];

    this.userList = [
      { code: 1, name: 'Profile' },
      { code: 2, name: 'Settings' },
      { code: 3, name: 'Logout' },
    ];
    console.log('Header constructor called');
  }

  ngOnInit() {}
}
