import { UserService } from './../user/user.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
// export class AuthGuard implements CanActivate {
export class AuthGuard  {
  constructor(private userService: UserService, private router: Router) {}

//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): boolean | Observable<boolean> | Promise<boolean | UrlTree> {
//     if (this.userService.isLogged()) {
//       this.router.navigate(['user', this.userService.getUserName()]);
//       return false;
//     }
//     return true;
//   }
}
