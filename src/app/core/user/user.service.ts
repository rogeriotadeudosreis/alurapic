import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { Subject } from 'rxjs';
import { TokenService } from './../token/token.service';
import { User } from './user';

@Injectable({ providedIn: 'root' })
export class UserService {
  private userSubject = new Subject<User>();

  constructor(private tokenService: TokenService) {}

  setToken(token: string) {
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }

  getUser() {
    return this.userSubject.asObservable();
  }

  private decodeAndNotify() {
    const token = this.tokenService.getToken();
    const user = jwt_decode(token) as User;
    this.userSubject.next(user);
  }
}
