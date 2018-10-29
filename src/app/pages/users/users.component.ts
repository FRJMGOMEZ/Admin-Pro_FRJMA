import { Component, OnInit, EventEmitter ,Output} from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../providers/user/user.service';
import { ModalUploadService } from '../../personalizedComponents/modal-upload/modal-upload.service';



declare var swal:any

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styles: []
})
export class UsersComponent implements OnInit {
  userOnline: User;
  users: User[];
  from: number = 0;
  total: number = 0;
  isUploading: boolean;

  constructor(public _userServices: UserService, public _modalUploadService:ModalUploadService) {

    this.userOnline = this._userServices.user;
  }

  ngOnInit() {
    this.uploadUsers();
    this._modalUploadService.notification.subscribe(data => {
      this.uploadUsers();
    });
  }

  uploadUsers() {
    this.isUploading = true;

    this._userServices.getItems("user", this.from).subscribe((data: any) => {
      if (data.users) {
        this.users = data.users;

        this.total = data["total"];

        this.isUploading = false;
      }
    });
  }

  search(input: string) {
    if (input) {
      this.isUploading = true;
      this._userServices.searchItems("users", input).subscribe(data => {
        this.users = data["users"].slice(this.from, this.from + 5);
        this.total = data["users"].length;
        this.isUploading = false;
      });
    } else {
      this.uploadUsers();
    }
  }

  changeFrom(value: number) {
    let from = this.from + value;

    if (from >= this.total) {
      value = from - this.total;
    }

    if (from < 0) {
      return;
    }

    this.from += value;

    this.uploadUsers();
  }

  delete(id: string, input?: string) {
    if (id === this.userOnline._id) {
      swal("YOU CAN NOT DELETE YOURSELF", this.userOnline.email, "error");
      return;
    }
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this info!",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then((remove: any) => {
      if (remove) {
        this._userServices.deleteItem("user", id).subscribe(data => {
          this.users = this.users.filter(user => {
            return user._id != id;
          });

          if (input) {
            console.log(input);
            this.search(input);
          } else {
            this.uploadUsers();
          }
        });
      }
    });
  }
  changeRole(user: User) {
    let userRole = { role: user.role };
    if (user._id === this.userOnline._id) {
      swal(
        "ROLE CAN NOT BE CHANGED",
        "You can`t change your own role",
        "error"
      );
      return;
    }
    this._userServices.uploadChanges("user", user._id, userRole).subscribe();
  }

  openModal(id:string){

    this._modalUploadService.showModal('users',id)
  
  }
}
