
//@angular Modules
import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

//Components
import { BreadcrumbsComponent } from "./breadcrumbs/breadcrumbs.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { HeaderComponent } from "./header/header.component";



@NgModule({
  imports:[RouterModule,CommonModule],
  declarations: [HeaderComponent, SidebarComponent, BreadcrumbsComponent],
  exports: [HeaderComponent, SidebarComponent, BreadcrumbsComponent]
})
export class SharedModule {}
