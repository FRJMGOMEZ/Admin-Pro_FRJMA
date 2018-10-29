import { Component,Inject } from '@angular/core';

import { DOCUMENT } from "@angular/platform-browser";
import { SettingsService } from './providers/settings/settings.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(
    public _settingService: SettingsService,
  ) {}

  }


