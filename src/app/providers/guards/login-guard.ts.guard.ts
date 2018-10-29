import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private _userService:UserService,public router:Router){

  }
  canActivate(
    ):  boolean {

      if (this._userService.isLogged()) {
        return true
      }
      else{

        console.log('LOCKED BY GUARD')

        this.router.navigate(['/login']);
        
        return false

      }

    console.log('Loggin Guard Checked')
   
  }
}
