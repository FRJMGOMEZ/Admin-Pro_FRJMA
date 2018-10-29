import { Component, OnInit,Output} from '@angular/core';
import { UploadFileService } from "src/app/providers/uploadFiles/upload-file.service";
import { Subscriber } from "rxjs";
import { UserService } from "src/app/providers/user/user.service";
import swal from "sweetalert";
import { User } from '../../models/user.model';
import { ModalUploadService } from './modal-upload.service';


@Component({
  selector: "app-modal-upload",
  templateUrl: "./modal-upload.component.html",
  styles: []
})
export class ModalUploadComponent implements OnInit {
  userOnline: User;
  imgUpload: File;
  temporalImage: string;

  constructor(
    public _userServices: UserService,
    public _uploadFilesService: UploadFileService,
    public _modalUploadService:ModalUploadService
  ) {    
    this.userOnline = this._userServices.user;
  }

  ngOnInit() {
  }

  selectImg(file: File) {
    if (!file) {
      this.imgUpload = null;
      return;
    }
    if (file.type.indexOf("image") < 0) {
      this.imgUpload = null;
      swal("JUST IMAGES", "THE SELECTED FILE IS NOT AN IMAGE", "error");
      return;
    }
    this.imgUpload = file;
    let reader = new FileReader();
    let urlImgTemp = reader.readAsDataURL(file);
    reader.onloadend = () => {
      this.temporalImage = reader.result;
    };
    //this.temporalImage
  }

  hideModal(){
    this.temporalImage=null;
    this.imgUpload= null;
    this._modalUploadService.hideModal();
  }

  uploadImg() {
    
    this._uploadFilesService.uploadFile(this.imgUpload,
                                        this._modalUploadService.type,
                                        this._modalUploadService.id,
                                        localStorage.getItem('tokenAdminPro'))
                            .then(resp=>{
                              console.log(resp);
                              this._modalUploadService.notification.emit(resp);
                              this.hideModal();})
                            .catch(resp=>{console.log(resp)})
  }
}
