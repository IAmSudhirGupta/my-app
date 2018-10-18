import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  unamePattern = '^[a-z0-9_-]{8,15}$';
  pwdPattern = '^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$';
  mobnumPattern = '^((\\+91-?)|0)?[0-9]{10}$';
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

  user: User = {
    userName: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    gender: '',
    dob: '',
    country: '',
    companyName: '',
    address: '',
    password: '',
    confirmPassword: '',
    isTCAccepted: false
  };

  constructor(private userService: UserService, private router: Router) {

  }

  ngOnInit() {
  }
  onSubmit(userForm) {
    if (userForm.valid) {
      this.userService.registerUser(this.user).subscribe((response) => {
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
        console.log('error while registering users...', error);
      });
    }
  }

}
