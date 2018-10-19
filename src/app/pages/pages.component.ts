import { Component, OnInit } from '@angular/core';

//declare function initPluggins()

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor() { console.log('PAGES COMPONENT')}

  ngOnInit() {

    //initPluggins();
  }

}
