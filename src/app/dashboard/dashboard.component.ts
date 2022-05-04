import { Component, ViewChild, Inject, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

export interface Request {
  value: string;
  viewValue: string;
}
export interface Reason {
  value: string;
  viewValue: string;
}
export interface Section {
  value: string;
  viewValue: string;
}

import {
  faArrowDownAZ,
  faColumns,
  faFilter,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';

import DataJson from '../dashboard/data.json';
import { ApiService } from './api.service';
import { FormControl, FormGroup } from '@angular/forms';

export interface USERS {
  refid: number;
  type: string;
  appliedDate: string;
  description: string;
  status: string;
  remarks: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  showDiv = {
    options: false,
  };

  Users: USERS[] = DataJson;

  faSearch = faSearch;
  faColumns = faColumns;
  faFilter = faArrowDownAZ;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog, private api: ApiService) {}

  fRequest: any;
  // users: any;

  ngOnInit() {
    //REST API Response
    this.api.get('/api5/facilityrequests').subscribe((res) => {
      this.fRequest = res;
      console.log('data response', this.fRequest);
    });

    // this.getData();
  }

  openDialog() {
    this.dialog.open(DialogElements);
  }
}

@Component({
  selector: 'dashboard-modal',
  templateUrl: 'dashboard-modal.html',
  styleUrls: ['dashboard-modal.css'],
})
export class DialogElements implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private apiService: ApiService
  ) {}

  // Add data to form
  formdata;
  emailid;

  refid;
  type;
  appliedDate;
  description;
  status;
  remarks;

  ngOnInit() {
    this.formdata = new FormGroup({
      emailid: new FormControl('angular@gmail.com'),
      passwd: new FormControl('abcd1234'),

      refid: new FormControl(''),
      type: new FormControl(''),
      appliedDate: new FormControl(''),
      description: new FormControl(''),
      status: new FormControl(''),
      remarks: new FormControl(''),
    });
  }
  onClickSubmit(data) {
    this.emailid = data.emailid;
    this.refid = data.refid;
    this.type = data.type;
    this.appliedDate = data.appliedDate;
    this.description = data.description;
    this.status = data.status;
    this.remarks = data.remarks;
  }

  // addRequest() {
  //   this.apiService.addRequest(newRequest).subscribe((request) =>
  //     this.requests.push(request)
  //   );
  // }

  requests: Request[] = [
    { value: 'electrical-0', viewValue: 'Electrical' },
    { value: 'stationary-1', viewValue: 'Stationary' },
    { value: 'it-2', viewValue: 'IT' },
    { value: 'furniture', viewValue: 'Furniture' },
  ];

  reasons: Reason[] = [
    { value: 'new-0', viewValue: 'Need New' },
    { value: 'replace-1', viewValue: 'Replace' },
    { value: 'other-2', viewValue: 'Others' },
  ];

  sections: Section[] = [
    { value: 'it-0', viewValue: 'IT Section' },
    { value: 'office-1', viewValue: 'Office Section' },
    { value: 'accounts-2', viewValue: 'Accounts Section' },
    { value: 'hk-3', viewValue: 'Housekeeping' },
    { value: 'MAE-4', viewValue: 'MAE' },
  ];
}
