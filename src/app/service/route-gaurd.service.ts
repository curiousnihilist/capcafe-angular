import { Injectable } from '@angular/core';
import { LoginServiceService } from './login-service.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGaurdService implements CanActivate{
  

  constructor(private loginService:LoginServiceService, private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
    if(this.loginService.isAdminloggedin || this.loginService.isUserloggedin)
        return true;
    else{
      alert("Please Login First!");
      this.router.navigate(['/login']);
      return false;
    }

       
  }
}
