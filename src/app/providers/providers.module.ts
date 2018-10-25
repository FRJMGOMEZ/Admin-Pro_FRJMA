import { NgModule } from "@angular/core";
import {CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

import {
  SharedService,
  SidebarService,
  SettingsService,
  UserService,
  LoginGuard
} from "./services.index";



@NgModule({
    imports:[CommonModule,HttpClientModule],
    providers:[SharedService,SidebarService,SettingsService,UserService]
})

export class ProvidersModule {}