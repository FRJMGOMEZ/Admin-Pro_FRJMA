import { Routes, RouterModule, CanActivate } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Chart1Component } from './chart1/chart1.component';
import { Component } from '@angular/core';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';

import { ProfileComponent } from './profile/profile.component';
import { LoginGuard } from '../providers/guards/login-guard.ts.guard';
import { UsersComponent } from './users/users.component';




const pagesRoutes: Routes = [
  {
    path: "",
    component: PagesComponent,
    canActivate: [LoginGuard],
    children: [
      {
        path: "dashboard",
        component: DashboardComponent,
        data: { title: "DASHBOARD", description: "It is a simple dashboard" }
      },
      {
        path: "progress",
        component: ProgressComponent,
        data: {
          title: "PROGRESS",
          description: "It show the progress of several procceses"
        }
      },
      {
        path: "chart1",
        component: Chart1Component,
        data: { title: "CHART", description: "It show the charts developed" }
      },
      {
        path: "promises",
        component: PromisesComponent,
        data: { title: "PROMISES" }
      },
      {
        path: "accountsettings",
        component: AccountSettingsComponent,
        data: { title: "SETTINGS" }
      },
      {
        path: "rxjs",
        component: RxjsComponent,
        data: { title: "OBSERVABLES RxJs" }
      },
      {
        path: "profile",
        component: ProfileComponent,
        data: { title: "USER PROFILE" }
      },
      ///Manteinance
      {
        path: "users",
        component: UsersComponent,
        data: { title: "MANTEINANCE OF USERS" }
      },
      { path: "", redirectTo: "/dashboard", pathMatch: "full" }
    ]
  }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes)


