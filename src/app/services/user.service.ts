import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { User } from '../models/User';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  authenticateUser(email: string, password: string): Observable <any> {
    return this.http.post( environment.API_BASE_URL + 'auth/login', {
      email: email,
      password: password
    });
  }
  getUserProfile(): Observable <any> {
    return this.http.get(environment.API_BASE_URL + 'auth/me') ;
  }

  registerUser(user: User): Observable <any> {
    return this.http.post(environment.API_BASE_URL + 'auth/register', user);
  }
}
