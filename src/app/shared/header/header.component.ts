import { Component} from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from 'src/app/providers/user/user.service';


@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styles: []
})
export class HeaderComponent {

  constructor(public _userService: UserService) {
  }
 
}
