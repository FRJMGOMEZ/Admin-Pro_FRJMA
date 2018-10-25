import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICES } from '../../config/config';
import { filter ,map} from 'rxjs/operators';
import swal from "sweetalert";
import { Router } from '@angular/router';

@Injectable({
  providedIn: "root"
})
export class UserService {
  user: User;
  token: string;

  constructor(public http: HttpClient, public router:Router) {
    this.updateFromStorage();
  }

  isLogged() {
    return this.token.length > 5 ? true : false;
  }

  updateFromStorage() {
    if (localStorage.getItem("tokenAdminPro")) {
      this.token = localStorage.getItem("tokenAdminPro");
      this.user = JSON.parse(localStorage.getItem("userAdminPro"));
    } else {
      this.token = "";
      this.user = null;
    }
  }

  saveInStorage(id: string, userDb: User, token: string) {
    localStorage.setItem("idAdminPro", id);
    localStorage.setItem("userAdminPro", JSON.stringify(userDb));
    localStorage.setItem("tokenAdminPro", token);

    this.user = userDb;
    this.token = token;
  }

  createUser(user: User) {
    let url = `${URL_SERVICES}/user`;

    return this.http.post(url, user).pipe(
      map((res: any) => {
        swal("USER SUCCESSFULLY REGISTERED", user.email, "success");
        return res.user;
      })
    );
  }

  login(user: User, rememberMe: boolean = false) {
    if (rememberMe) {
      localStorage.setItem("email", user.email);
    } else {
      localStorage.removeItem("email");
    }

    let url = `${URL_SERVICES}/login`;

    return this.http.post(url, user).pipe(
      map((res: any) => {
        this.saveInStorage(res.userDb_id, res.userDb, res.token);
        return res.userDb;
      })
    );
  }

  loginByGoogle(token: string) {
    let url = `${URL_SERVICES}/login/google`;

    return this.http.post(url, { token }).pipe(
      map((res: any) => {
        this.saveInStorage(res.userDb_id, res.userDb, res.token);
        return true;
      })
    );
  }
  logOut() {
    
    this.user=null;
    this.token= '';

     localStorage.removeItem("tokenAdminPro");
     localStorage.removeItem("userAdminPro");
     localStorage.removeItem("idAdminPro");

    this.router.navigate(["/login"]);
  }
}
