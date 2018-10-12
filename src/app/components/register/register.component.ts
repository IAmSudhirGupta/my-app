import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

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
    confirmPassword:''
  };

  constructor() {

  }

  ngOnInit() {
  }
  onSubmit(userForm){

  }

}
