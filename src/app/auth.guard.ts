import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthserviceService } from '../app/authservice.service';

@Injectable({
    providedIn: 'root'
  })
  export class AuthGuard implements CanActivate {

  
    constructor(private authService: AuthserviceService, private router: Router) {}

    canActivate(): boolean {
      if (this.authService.isLoggedIn()) {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
    }
  }