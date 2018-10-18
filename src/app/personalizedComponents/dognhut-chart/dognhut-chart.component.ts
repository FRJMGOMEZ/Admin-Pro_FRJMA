import { Component,Input } from '@angular/core';

@Component({
  selector: "app-dognhut-chart",
  templateUrl: "./dognhut-chart.component.html",
  styleUrls: ["./dognhut-chart.component.css"]
})
export class DognhutChartComponent  {

  @Input() legend=``;

  @Input('labels') doughnutChartLabels: any[] = [];

  @Input('data') doughnutChartData: number[] = [];
  
  @Input('type') doughnutChartType: string = "";

}
