import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate() {
    const accessToken = localStorage.getItem('accessToken');
    const idUser = localStorage.getItem('idUser');

    if (accessToken && idUser) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
