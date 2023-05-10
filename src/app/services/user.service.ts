import { Injectable } from '@angular/core';
import { of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  isLoggedIn() {
    return of(true).pipe(tap((v) => console.log(v)));
  }

  logout() {
    return of(false).pipe(tap((v) => console.log(v)));
  }
}
