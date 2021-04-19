import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";
import { DataService } from "./services/data.service";
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  token: any;
  constructor(
    private route: Router,
    private dataService: DataService
  ){}
  canActivate(){
    this.token = localStorage.getItem('x-access-token');
    if(this.token)
    {
      if(!this.dataService.gettoken())
      {
        return true;
      }
      else if(this.dataService.gettoken())
      {
        localStorage.removeItem('exp')
        localStorage.removeItem('iat')
        localStorage.removeItem('x-access-token')
        this.route.navigate(['/login'])
      }
    }
    else
    {
      this.route.navigate(['/login']);
    }
  }

}
