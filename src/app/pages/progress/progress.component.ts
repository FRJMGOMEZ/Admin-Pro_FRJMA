import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  percent1:number = 50;
  percent2:number = 60;
  legend1:string = 'BAR1';
  legend2:string = 'BAR2';

  constructor() { }

  ngOnInit() {
  }

  
}
