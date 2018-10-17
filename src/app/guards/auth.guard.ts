import { AuthService } from './../login/services/auth.service';
import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanLoad {
  constructor(private authService: AuthService,private router: Router) {}
  canLoad(): Observable<boolean> | Promise<boolean> | boolean {
    const authOK = this.authService.isAuthenticated()
    if (authOK){
      return authOK
    }else{
      this.router.navigate(['/login'])
    }
  }
}
