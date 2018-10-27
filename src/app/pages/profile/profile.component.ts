import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Subscriber } from 'rxjs';
import { UserService } from 'src/app/providers/user/user.service';
import { UploadFileService } from 'src/app/providers/uploadFiles/upload-file.service';
import swal from "sweetalert";


@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styles: []
})
export class ProfileComponent implements OnInit {

  form:FormGroup
  user:User
  imgUpload:File=null
  temporalImage:string;

  constructor(private _userServices: UserService, private _uploadFilesService:UploadFileService) {

    this.user = this._userServices.user;
  }

  ngOnInit() {

    this.form = new FormGroup({
      name: new FormControl(this.user.name, Validators.required),
      email: new FormControl(this.user.email, [Validators.required, Validators.email])
    });
  }

  saveChanges(){

      if (this.form.invalid) {
        return;
      }

      let userForm = this.form.value; 

      let changes;

      if(this.user.google===true){
         changes = {name:userForm.name}
      }

      else{
        changes={name:userForm.name,
                 email:userForm.email}
      }
      this._userServices.uploadChanges('user',this.user._id,changes).subscribe(userDb=>{
        
       })
 }

 selectImg(file:File){

   if(!file){this.imgUpload=null;return}


   if(file.type.indexOf('image')<0){
    swal('JUST IMAGES','THE SELECTED FILE IS NOT AN IMAGE','error');
    this.imgUpload = null;
    return;
   }

   this.imgUpload = file;

   let reader = new FileReader();
   let urlImgTemp = reader.readAsDataURL(file);
   
   reader.onloadend = ()=>{

    this.temporalImage=reader.result;
   }

   console.log(this.imgUpload);

   //this.temporalImage
 }

 changeImg(){

  let id = this.user._id;
  let token= this._userServices.token;

  this._uploadFilesService.uploadFile(this.imgUpload,'users',id,token)
     .then(res=>{

      console.log(res);

  this._userServices.saveInStorage(res['userUpdated']._id,res['userUpdated'],token)

  swal('IMAGE SUCCESFULLY UPDATED',res['userUpdated'].img, "success")
      
    })
     .catch(res=>{console.log(res)})
 }
}
