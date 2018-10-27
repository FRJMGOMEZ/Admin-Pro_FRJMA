import { Component, OnInit } from '@angular/core';
import { Router,ActivationEnd } from '@angular/router';
import { filter ,map} from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from "@angular/platform-browser";
import { NgForm } from '@angular/forms';
import { UserService } from '../providers/user/user.service';
import { User } from '../models/user.model';
import { NgZone } from "@angular/core";

declare function initPluggins();
declare const gapi:any;

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  email: string;
  rememberMe: boolean = false;
  auth2: any;

  constructor(
    public router: Router,
    public headerTitle: Title,
    private meta: Meta,
    public _userService: UserService,
    private zone: NgZone
  ) {
    this.getDataRoute().subscribe(event => {
      this.headerTitle.setTitle(event.title);
      const metaTag: MetaDefinition = {
        name: event.description,
        content: event.title
      };
      this.meta.updateTag(metaTag);
    });
  }

  ngOnInit() {

    initPluggins();

    this.googleInit();

    this.email = localStorage.getItem("email") || "";
    if (this.email.length > 0) {
      this.rememberMe = true;
    }
  }

  register() {
    this.router.navigate(["/register"]);
  }

  googleInit() {
    gapi.load("auth2", () => {
      this.auth2 = gapi.auth2.init({
        clien_id:
          "97587997178-d4m3g8lhl9g3flctnvmpmdonk5tgo9c7.apps.googleusercontent.com",
        cookiepolicy: "single-host-origin",
        scope: "profile email"
      });

      this.attachSignIn(document.getElementById("btnGoogle"));
    });
  }

  attachSignIn(element) {
    this.auth2.attachClickHandler(element, {}, googleUser => {
      //let profile = googleUser.getBasicProfile();
      let token = googleUser.getAuthResponse().id_token;
      //console.log(token);
      this.zone.run(() => {
        this._userService.loginByGoogle(token).subscribe(data => {
          this.router.navigate(["/dashboard"]);
        });
      });
    });
  }

  logIn(form: NgForm) {
    if (form.invalid) {
      return;
    }

    let user = new User(null, form.value.email, form.value.password);
    let rememberMe: boolean = form.value.rememberMe;

    this.zone.run(() => {
    this._userService.login(user, rememberMe).subscribe(data => {
      this.router.navigate(["/dashboard"]);
    });
  })
  }

  getDataRoute() {
    return this.router.events.pipe(
      filter(event => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map((event: ActivationEnd) => event.snapshot.data)
    );
  }
}
