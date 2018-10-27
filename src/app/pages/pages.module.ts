import { NgModule } from '@angular/core';


//Main Component
import { PagesComponent } from './pages.component';

//Components, Pages
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Chart1Component } from './chart1/chart1.component';
import { AccountSettingsComponent } from "./account-settings/account-settings.component";
import { ProfileComponent } from "./profile/profile.component";

import { IncrementComponent } from '../personalizedComponents/increment/increment.component';
import { DognhutChartComponent } from '../personalizedComponents/dognhut-chart/dognhut-chart.component';

//TEST Components (Promises and Observables)
import { PromisesComponent } from "./promises/promises.component";
import { RxjsComponent } from './rxjs/rxjs.component';

//Routes
import { PAGES_ROUTES } from "./pages.routes";

//Modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from "ng2-charts";
import { SharedModule } from '../shared/shared.module';
import { PipesModule } from "../pipes/pipes.module";

//Modules from @angular
import { CommonModule} from "@angular/common";


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Chart1Component,
    IncrementComponent,
    DognhutChartComponent,
    AccountSettingsComponent,
    PromisesComponent,
    RxjsComponent,
    ProfileComponent
  ],
  exports: [DashboardComponent, ProgressComponent, Chart1Component,PagesComponent,DognhutChartComponent],
  imports: [SharedModule,PAGES_ROUTES,FormsModule,ChartsModule,PipesModule,CommonModule,ReactiveFormsModule]

})
export class PagesModule {}
