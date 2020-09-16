import { Store } from '@ngrx/store';
import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { saveCurrentUser } from 'src/app/redux/users/users.actions';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanLoad,CanActivate {

  constructor(private router: Router, private store: Store) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (sessionStorage.getItem("user") != null) {
      this.store.dispatch(saveCurrentUser({user: JSON.parse(sessionStorage.getItem("user"))}));
      return true;
    } else {
      this.router.navigateByUrl("/login");
      return false;
    }
  }
  canLoad(route: import("@angular/router").Route, segments: import("@angular/router").UrlSegment[]): boolean | import("rxjs").Observable<boolean> | Promise<boolean> {
    if (sessionStorage.getItem("user") != null) {
      this.store.dispatch(saveCurrentUser({user: JSON.parse(sessionStorage.getItem("user"))}));
      return true;
    } else {
      this.router.navigateByUrl("/login");
      return false;
    }
  }
}