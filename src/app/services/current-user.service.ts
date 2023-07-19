import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  currentUser = new BehaviorSubject<{ id: string; name: string } | null | undefined>(undefined);
  platformId: Object;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.platformId = platformId;
  }

  setCurrentUser() {
    if (isPlatformBrowser(this.platformId) && localStorage.getItem('token')) {
      this.currentUser.next({ id: '1', name: 'Foo' });
    } else {
      this.currentUser.next(null);
    }
  }
}
