import { Component, OnInit } from '@angular/core';
import { UserService } from '../../providers/services.index';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor(public _userService:UserService) { }

  ngOnInit() {
  }

}
