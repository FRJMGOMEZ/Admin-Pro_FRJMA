import { NgModule } from '@angular/core';

//Main Component
import { PagesComponent } from './pages.component';

//Components
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Chart1Component } from "./chart1/chart1.component";

//Routes
import { PAGES_ROUTES } from "./pages.routes";

//Modules
import { SharedModule } from '../shared/shared.module';
 
@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Chart1Component,
  ],
  exports: [DashboardComponent, ProgressComponent, Chart1Component,PagesComponent],
  imports: [SharedModule,PAGES_ROUTES]
})
export class PagesModule {}
