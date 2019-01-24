import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class EventService {
  private authSource = new BehaviorSubject(false);
  isAuthenticated =  this.authSource.asObservable();

  private messageSource = new BehaviorSubject("");
  displayName = this.messageSource.asObservable();
  
  constructor() { }

  authenticateUser(messge : boolean){
    this.authSource.next(messge);
  }
  userDisplayName(name: string){
    this.messageSource.next(name);
  }
}
