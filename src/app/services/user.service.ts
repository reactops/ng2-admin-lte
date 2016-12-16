import { Actor } from '../models/actor';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs/Rx';

@Injectable()
export class UserService {
  public currentUser: ReplaySubject<Actor> = new ReplaySubject<Actor>(1);

  constructor() {
    // TODO 
  }

  public setCurrentUser(actor: Actor) {
    this.currentUser.next(actor);
  }
}
