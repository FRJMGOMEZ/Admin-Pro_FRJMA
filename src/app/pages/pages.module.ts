import { NgModule } from '@angular/core';


//Main Component
import { PagesComponent } from './pages.component';

//Components
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Chart1Component } from './chart1/chart1.component';

import { IncrementComponent } from '../personalizedComponents/increment/increment.component';
import { DognhutChartComponent } from '../personalizedComponents/dognhut-chart/dognhut-chart.component';


//Routes
import { PAGES_ROUTES } from "./pages.routes";

//Modules
import { FormsModule } from "@angular/forms";
import { ChartsModule } from "ng2-charts";
import { SharedModule } from '../shared/shared.module';
 
@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Chart1Component,
    IncrementComponent,
    DognhutChartComponent
  ],
  exports: [DashboardComponent, ProgressComponent, Chart1Component,PagesComponent,DognhutChartComponent],
  imports: [SharedModule,PAGES_ROUTES,FormsModule,ChartsModule]

})
export class PagesModule {}
