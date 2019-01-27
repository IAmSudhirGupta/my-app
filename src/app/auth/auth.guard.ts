import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  authToken: string = "";
  constructor(private auth: AuthService, private router: Router){

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    //console.log('CanActivate...', state, next);
    return this.isUserAuthenticated();
  }

  isUserAuthenticated(){
    this.authToken = this.auth.getToken();
    if (!this.authToken) {
      this.router.navigate(['/users/login']);
      return false;
    } else {
      return true;
    }
  }
}
