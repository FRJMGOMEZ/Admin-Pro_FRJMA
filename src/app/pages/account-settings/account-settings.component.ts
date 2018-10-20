import { Component} from '@angular/core';
import { SettingsService } from '../../providers/services.index';


@Component({
  selector: "app-account-settings",
  templateUrl: "./account-settings.component.html",
  styles: []
})
export class AccountSettingsComponent {

  selectores:any= document.getElementsByClassName("selector");

  constructor(public _settingService:SettingsService) {}

  ngOnInit(): void {
   
      this.placeCheck(this._settingService.settings.theme);
  }
  
  placeCheck(theme:string) {

    for (let ref of this.selectores) {
      
      if(ref.getAttribute('data-theme') === theme){

        ref.classList.add('working');
        break;
      }
    }
  }

  changeStyle(color: string, link: any) {

    this._settingService.applyTheme(color);

    this.applyCheck(link);
  }

  applyCheck(link: any) {

    for (let ref of this.selectores) {
      

      ref.classList.remove("working");

      link.classList.add("working");
    }
  }
}
