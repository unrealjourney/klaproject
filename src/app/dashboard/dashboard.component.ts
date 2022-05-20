import { Component, ViewChild, Inject, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from './user.model';

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
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';

export interface USERS {
  refid: number;
  request: string;
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

  // FacilityRequest: USERS[] = DataJson;

  faSearch = faSearch;
  faColumns = faColumns;
  faFilter = faArrowDownAZ;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog, private api: ApiService) {}

  fRequest: any;
  // users: any;

  FacilityRequest: any = [];

  ngOnInit() {
    //REST API Response
    // this.api.get('/api5/facilityreq').subscribe((res) => {
    //   this.fRequest = res;
    //   console.log('data response', this.fRequest);
    // });

    this.fetchFacility();

    // this.getData();
  }

  fetchFacility() {
    return this.api.getFacilitys().subscribe((data: {}) => {
      this.FacilityRequest = data;
    });
  }

  // remove(id) {
  //   this.api.delete(id).subscribe((res) => {
  //     this.fetchFacility();
  //   });
  // }

  // add(employee) {
  //   this.api.create(employee).subscribe((employee: {}) => {
  //     this.FacilityRequest = employee;
  //   });
  //   this.fetchFacility();
  // }

  openDialog() {
    this.dialog.open(DialogElements);
  }
}

@Component({
  selector: 'dashboard-modal',
  templateUrl: 'dashboard-modal.html',
  styleUrls: ['dashboard-modal.css'],
  providers: [DatePipe],
})
export class DialogElements implements OnInit {
  // user: facilityRequest = new facilityRequest();

  user: User = new User();
  isAdded = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private api: ApiService,
    private fb: FormBuilder,
    private http: HttpClient,
    private datePipe: DatePipe
  ) {
    this.addForm = this.fb.group({
      items: [null, Validators.required],
      items_value: ['no', Validators.required],
    });

    this.rows = this.fb.array([]);
  }

  userTypes = ['Silver', 'Gold', 'Platinum'];
  currentDate = new Date();
  userForm!: FormGroup;

  addForm: FormGroup;
  rows: FormArray;

  // Add data to form
  formdataReq;
  refid;
  request;
  appliedDate;
  description;
  status;
  remarks;

  ngOnInit() {
    this.formdataReq = new FormGroup({
      refid: new FormControl(''),
      request: new FormControl(''),
      appliedDate: new FormControl(''),
      description: new FormControl(''),
      status: new FormControl(''),
      remarks: new FormControl(''),
    });

    this.addForm.get('items')?.valueChanges.subscribe((val) => {
      if (val === true) {
        this.addForm.get('items_value')?.setValue('yes');
        this.addForm.addControl('rows', this.rows);
      }
      if (val === false) {
        this.addForm.get('items_value')?.setValue('no');
        this.addForm.removeControl('rows');
      }
    });

    this.userForm = new FormGroup({
      refid: new FormControl(''),
      request: new FormControl(''),
      appliedDate: new FormControl(''),
      description: new FormControl(''),
      status: new FormControl(''),
      remarks: new FormControl(''),
      // userType: new FormControl(),
      // startDate: new FormControl(
      //   this.datePipe.transform(this.currentDate, 'yyyy-MM-dd')
      // ),
    });
  }

  onSubmit() {
    this.user.refid = this.userForm.value.refid;
    this.user.request = this.userForm.value.type;
    this.user.appliedDate = this.userForm.value.appliedDate;
    this.user.description = this.userForm.value.description;
    this.user.status = this.userForm.value.status;
    this.user.remarks = this.userForm.value.remarks;
    this.save();
  }

  // save() {
  //   this.api.addUser(this.user).subscribe(
  //     (user) => {
  //       console.log(user);
  //       this.isAdded = true;
  //     },
  //     (error) => console.log(error)
  //   );
  // }

  save() {  
    this.api.addUser(this.user)  
      .subscribe(user => console.log(user), error => console.log(error));  
    this.user = new User();  
  }  

  resetUserForm() {
    this.isAdded = false;
    this.userForm.reset();
  }

  onAddRow() {
    this.rows.push(this.createItemFormGroup());
  }

  onRemoveRow(rowIndex: number) {
    this.rows.removeAt(rowIndex);
  }

  createItemFormGroup(): FormGroup {
    return this.fb.group({
      name: null,
      description: null,
      qty: null,
    });
  }

  onClickSubmit(data) {
    this.refid = data.refid;
    this.request = data.type;
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
    { value: '1', viewValue: 'Repair' },
    { value: '2', viewValue: 'IT Request - No Purchase Involved' },
    { value: '3', viewValue: 'IT Request - Purchase Involved' },
    { value: '4', viewValue: 'Stationary/Consumables' },
    { value: '5', viewValue: 'Furniture' },
    { value: '6', viewValue: 'Electrical/Plumbing Service' },
    { value: '7', viewValue: 'Cleaning Service' },
    { value: '8', viewValue: 'Vehicle Booking' },
    { value: '9', viewValue: 'Conference Room(Regular)' },
    { value: '10', viewValue: 'Conference Room(Assembly Block)' },
    { value: '11', viewValue: 'Conference Room(MLA Hostel)' },
    { value: '12', viewValue: 'Download Forms' },
  ];

  reasons: Reason[] = [
    { value: 'new-0', viewValue: 'Need New' },
    { value: 'replace-1', viewValue: 'Replace' },
    { value: 'other-2', viewValue: 'Others' },
  ];

  sections: Section[] = [
    { value: '1', viewValue: 'IT Section' },
    { value: '2', viewValue: 'Office Section' },
    { value: '3', viewValue: 'Accounts Section' },
    { value: '4', viewValue: 'Housekeeping' },
    { value: '5', viewValue: 'MAE' },
  ];
}
