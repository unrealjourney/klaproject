import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
users: any;

  showHeader = false;
  showSidebar = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private api: ApiService) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showHeader =
          this.activatedRoute.firstChild?.snapshot.data['showHeader'] !== false;
        this.showSidebar =
          this.activatedRoute.firstChild?.snapshot.data['showSidebar'] !== false;
      }
    });

    //REST API Response
    this.api.get('users?page=1').subscribe(res => {
      this.users = res;
      console.log('data response', this.users);
    });
  }
}
