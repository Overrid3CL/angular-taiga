import {
  ActivatedRouteSnapshot,
  createUrlTreeFromSnapshot,
} from '@angular/router';
import { UserService } from '../services/user.service';
import { inject } from '@angular/core';
import { map } from 'rxjs';

export const authGuard = (next: ActivatedRouteSnapshot) => {
  return inject(UserService)
    .isLoggedIn()
    .pipe(
      map((isLoggedIn) =>
        isLoggedIn ? true : createUrlTreeFromSnapshot(next, ['/', 'login'])
      )
    );
};
