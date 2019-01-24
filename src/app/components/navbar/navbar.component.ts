import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { EventService } from '../../services/event-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  authToken: string ;
  isAuthenticated = false;
  displayName: string = localStorage.getItem('userName');
  constructor( private auth: AuthService, private router: Router, private eventService: EventService) {
    this.authToken = this.auth.getToken();
    if (!this.authToken) {
      this.router.navigate(['/users/login']);
    } else {
      this.isAuthenticated = true;
    }
  }

  ngOnInit() {
    if(this.isAuthenticated){
      this.eventService.authenticateUser(true);
      this.eventService.userDisplayName(this.displayName);
    }
    this.eventService.isAuthenticated.subscribe(auth => this.isAuthenticated = auth);
    this.eventService.displayName.subscribe(name => this.displayName = name);
  }

  logOut(event) {
    localStorage.clear();
    this.router.navigate(['/users/login']);
  }
}
