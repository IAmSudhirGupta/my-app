import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  authToken: string ;
  isAuthenticated = false;
  firstName: string = localStorage.getItem('firstName');
  lastName: string = localStorage.getItem('lastName');
  userName: string = localStorage.getItem('userName');
  displayName: string = this.userName;
  constructor( private auth: AuthService, private router: Router) {
    this.authToken = this.auth.getToken();
    if (!this.authToken) {
      this.router.navigate(['/users/login']);
    } else {
      this.isAuthenticated = true;
    }
  }

  ngOnInit() {
  }

  logOut(event) {
    localStorage.clear();
    this.router.navigate(['/users/login']);
  }
  test() {
    console.log('test..');
  }
}
