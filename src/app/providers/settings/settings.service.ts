import { Injectable,Inject } from '@angular/core';
import { DOCUMENT } from "@angular/platform-browser";

interface Settings {
 themeUrl:string,
 theme:string
} 

@Injectable({
  providedIn: "root"
})
export class SettingsService {

  settings: Settings = {
    themeUrl: "assets/css/colors/default.css ",
    theme: "default"
  };

  constructor(@Inject(DOCUMENT) private _document) {

    this.uploadSettings();

  }

  saveSettings() {

    localStorage.setItem("settings", JSON.stringify(this.settings));
    
  }

  uploadSettings() {

    if (localStorage.getItem("settings")) {

      this.settings = JSON.parse(localStorage.getItem("settings"));

      this.applyTheme(this.settings.theme);
    }

    else{this.applyTheme(this.settings.theme)}
  }

  applyTheme(color) {

     let url = `assets/css/colors/${color}.css`;

    this._document.getElementById("theme").setAttribute("href", url);

    this.settings.themeUrl = url;

    this.settings.theme = color;

    this.saveSettings();
  }
}
