import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Chart1Component } from './chart1/chart1.component';
import { Component } from '@angular/core';
import { AccountSettingsComponent } from './account-settings/account-settings.component';


const pagesRoutes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "progress", component: ProgressComponent },
      { path: "chart1", component: Chart1Component },
      { path: "accountsettings", component: AccountSettingsComponent},
      { path: "", redirectTo: "/dashboard", pathMatch: "full" }
      
    ]
  }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes)


