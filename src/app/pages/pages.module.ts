import { NgModule } from '@angular/core';

//Main Component
import { PagesComponent } from './pages.component';

//Components, Pages
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Chart1Component } from './chart1/chart1.component';
import { AccountSettingsComponent } from "./account-settings/account-settings.component";
import { ProfileComponent } from "./profile/profile.component";
import { UsersComponent } from "./users/users.component";

///Personalized Components
import { IncrementComponent } from '../personalizedComponents/increment/increment.component';
import { DognhutChartComponent } from '../personalizedComponents/dognhut-chart/dognhut-chart.component';
import { ModalUploadComponent } from "../personalizedComponents/modal-upload/modal-upload.component";


//TEST Components (Promises and Observables)
import { PromisesComponent } from "./promises/promises.component";
import { RxjsComponent } from './rxjs/rxjs.component';

//Routes
import { PAGES_ROUTES } from "./pages.routes";

//Modules from @angular
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { ChartsModule } from "ng2-charts";

//Modules
import { SharedModule } from '../shared/shared.module';
import { PipesModule } from "../pipes/pipes.module";



@NgModule({
  declarations: [
    PagesComponent,

    DashboardComponent,
    ProgressComponent,

    Chart1Component,
    AccountSettingsComponent,
    PromisesComponent,
    RxjsComponent,
    ProfileComponent,
    UsersComponent,
    ///Perzonalized Componenets
    IncrementComponent,
    DognhutChartComponent,
    ModalUploadComponent
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Chart1Component,
    PagesComponent,

    DognhutChartComponent,
    ModalUploadComponent,
    IncrementComponent
  ],
  imports: [
    SharedModule,
    PAGES_ROUTES,
    FormsModule,
    ChartsModule,
    PipesModule,
    CommonModule,
    ReactiveFormsModule
  ]
})
export class PagesModule {}
