import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {

  constructor(private router: Router){}

  canActivate(){
    const accessToken = localStorage.getItem('accessToken');
    const idUser = localStorage.getItem('idUser');

    if(accessToken && idUser){
      localStorage.removeItem('accessToken');
      localStorage.removeItem('idUser');
      this.router.navigate(['/home'])
      return false
    } else {
      return true
    }
  }
      
  
}
