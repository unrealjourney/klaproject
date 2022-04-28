import { Component, OnInit } from '@angular/core';

import UserJson from './RequestData.json';

export interface USERDATA {
  refid: number;
  type: string;
  appliedDate: string;
  approverRemarks: string;
  reason: string;
  note: string;
  remarks: string;
}

@Component({
  selector: 'app-request-dashboard',
  templateUrl: './request-dashboard.component.html',
  styleUrls: ['./request-dashboard.component.css']
})
export class RequestDashboardComponent implements OnInit {

  Users: USERDATA[] = UserJson;

  constructor() {
   }

  ngOnInit(): void {
  }

}
