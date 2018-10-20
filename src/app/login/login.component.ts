import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare function initPluggins()

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router:Router) { }
  
  ngOnInit() {

    initPluggins();
  }

  logIn(){

  this.router.navigate(['/dashboard'])

    console.log('Loggin in...')

  }
}
