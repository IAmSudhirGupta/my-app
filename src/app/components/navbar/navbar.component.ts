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
  displayName: string = this.firstName + ' ' + this.lastName;
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
    console.log(localStorage.getItem('token'));
    this.router.navigate(['/users/login']);
  }
  test() {
    console.log('test..');
  }
}
