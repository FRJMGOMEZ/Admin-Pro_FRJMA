import { Component} from '@angular/core';
import { UserService } from '../../providers/user/user.service';
import { SidebarService } from '../../providers/shared/sidebar.service';



@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styles: []
})
export class SidebarComponent {
  menus: any;

  constructor(public _sideBarService: SidebarService, public _userService:UserService) {

    this.menus = this._sideBarService.menu;
  }

}




