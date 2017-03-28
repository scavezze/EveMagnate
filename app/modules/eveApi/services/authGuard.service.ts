import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { NavPaths } from '../../../app.routing';
import { LoginService } from './login.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) {}

  canActivate() {
    // If user is not logged in we'll send them to the homepage 
    if (!this.loginService.loggedIn()) {
      this.router.navigate([NavPaths.login]);
      return false;
    }
    return true;
  }

}