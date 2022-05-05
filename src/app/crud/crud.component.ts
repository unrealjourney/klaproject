import { Component, OnInit } from '@angular/core';
import { faWhiskeyGlass } from '@fortawesome/free-solid-svg-icons';
import { CrudService } from './crud.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  Users: any = [];

  constructor(public crudService: CrudService) { }

  ngOnInit() {
    this.fetchUsers()
  }

  fetchUsers() {
    return this.crudService.getUsers().subscribe((data: {}) => {
      this.Users = data;
    })
  }

  remove(id) {
    this.crudService.delete(id).subscribe(res => {
      this.fetchUsers()
    })
  }

  add(employee) {
    this.crudService.create(employee).subscribe((employee: {}) => {
      this.Users = employee;
    })
    this.fetchUsers()
  }

}
