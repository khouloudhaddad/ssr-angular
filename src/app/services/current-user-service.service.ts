import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserServiceService {

  currentUser = new BehaviorSubject<{ id: string; name: string } | null | undefined >(undefined);

  constructor() { }

  setCurrentUser() {
    if (localStorage.getItem('token')) {
      this.currentUser.next({ id: '1', name: 'Foo' });
    } else {
      this.currentUser.next(null);
    }
  }
}
