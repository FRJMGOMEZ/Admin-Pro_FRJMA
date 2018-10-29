import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICES } from '../../config/config';
import { filter ,map} from 'rxjs/operators';
import swal from "sweetalert";
import { Router } from '@angular/router';
import { UploadFileService } from '../uploadFiles/upload-file.service';

@Injectable({
  providedIn: "root"
})
export class UserService {
  user: User;
  token: string;

  constructor(public http: HttpClient, public router:Router, public _uploadFileService:UploadFileService) {
    this.updateFromStorage()
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
        this.saveInStorage(res.userDb._id, res.userDb, res.token);
        return true;
      })
    );
  }

  loginByGoogle(token: string) {
    let url = `${URL_SERVICES}/login/google`;
    return this.http.post(url, { token })
     .pipe(
      map((res: any) => {
        this.saveInStorage(res.userDb._id, res.userDb, res.token);
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

  uploadChanges(type:string,id:string,changes:Object){
   
   let url = `${URL_SERVICES}/${type}/${id}?token=${this.token}`;

    return this.http.put(url,changes)
    .pipe(map((res:any)=>{

      swal("USER SUCCESSFULLY UPDATED", res.userSaved.name, "success");

        if(res.userSaved._id === id){
          return true
        }
        else {
          this.saveInStorage(res.userSaved._id, res.userSaved, this.token);
          return true
        }     
    }))
  }

  getItems (type:string,from:number=0) {

    let url =`${URL_SERVICES}/${type}?from=${from}&limit=5`;

   return this.http.get(url)
                 
  }

  searchItems(type:string,input:string){

    let url = `${URL_SERVICES}/search/collection/${type}/${input}`;

    return this.http.get(url)
  }

  deleteItem(type:string,id:string){

     let url = `${URL_SERVICES}/${type}/${id}?token=${this.token}`

     return this.http.delete(url)
                     .pipe(map(()=>{
                        swal("USER DELETED", this.user.email, "success");
                        return true
                     }))
  } 
}
