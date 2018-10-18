import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any = {
    email: '',
    password: ''
  };
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }
  authenticateUser(loginForm) {
    if (loginForm.valid) {
      this.userService.authenticateUser(this.user.email, this.user.password)
        .subscribe((response) => {
          if (response.auth) {
            localStorage.setItem('token', response.token);
            this.userService.getUserProfile().subscribe((resp) => {
              console.log(resp);
              for (const key in resp) {
                if (resp.hasOwnProperty(key)) {
                  localStorage.setItem(key, resp[key]);
                }
              }
              this.router.navigate(['/']);
            }, error => {
              console.log('error while retrieving user details..');
            });
          }
        }, error => {
            console.log('error while login..', error);
        });
    } else {
      alert('something went wrong..');
    }
  }
}
