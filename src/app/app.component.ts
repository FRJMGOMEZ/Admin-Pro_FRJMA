import { Component,Inject } from '@angular/core';
import { SettingsService} from './providers/services.index';
import { DOCUMENT } from "@angular/platform-browser";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(
    public _settingService: SettingsService,
  ) {console.log('APP-COMPONENT')}

  }


