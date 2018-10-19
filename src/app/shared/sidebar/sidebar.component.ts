import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../providers/services.index';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  menus:any;

  constructor(public _sideBarService:SidebarService) {

    this.menus = this._sideBarService.menu;

   }

  ngOnInit() {
  }

}




