import { NgModule } from "@angular/core";
import {CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";


import { SharedService } from "./shared/shared.service";
import { SidebarService } from "./shared/sidebar.service";
import { SettingsService } from "./settings/settings.service";
import { UserService } from "./user/user.service";
import { UploadFileService } from "./uploadFiles/upload-file.service";
import { ModalUploadService } from "../personalizedComponents/modal-upload/modal-upload.service";


import { LoginGuard } from "./guards/login-guard.ts.guard";





@NgModule({
    imports:[CommonModule,HttpClientModule],
    providers:[SharedService,SidebarService,SettingsService,UserService,UploadFileService,ModalUploadService]
})

export class ProvidersModule {}