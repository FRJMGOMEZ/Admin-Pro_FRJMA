import { NgModule } from "@angular/core";
import {CommonModule } from '@angular/common';

import { SharedService } from './services.index';
import { SidebarService } from './services.index';
import { SettingsService } from './services.index';

@NgModule({
    providers:[SharedService,SidebarService,SettingsService]
})

export class ProvidersModule {}