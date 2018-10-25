import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare function initPluggins()

@Component({
  selector: "app-pages",
  templateUrl: "./pages.component.html",
  styles: []
})
export class PagesComponent implements OnInit {
  constructor( public router:Router) {
    console.log("PAGES COMPONENT");
  }

  ngOnInit() {
    initPluggins();
  }
}
