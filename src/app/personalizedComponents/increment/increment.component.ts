import { Component,  Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: "app-increment",
  templateUrl: "./increment.component.html",
  styleUrls: ["./increment.component.css"]
})
export class IncrementComponent {

  @ViewChild('txtPercent') txtProgress:ElementRef;

  @Input() legend:string='Legend';
  @Input() percent:number;

  @Output() changeValue:EventEmitter<number> = new EventEmitter(); 

  constructor() {
  }
  
  increaseNumber() {
    if (this.percent < 100) {
      this.percent += 5;
      this.changeValue.emit(this.percent);
      this.txtProgress.nativeElement.focus();    
    }
  }

  decreaseNumber() {
    if (this.percent > 0) {
      this.percent -= 5;
      this.changeValue.emit(this.percent)
      this.txtProgress.nativeElement.focus();
    }
  }

  onChange(newValue:number){

    if(newValue >= 100){this.percent=100}
    else if (newValue <= 0){this.percent=0}
    else{this.percent=newValue}

    this.txtProgress.nativeElement.value = Number(this.percent); 

    this.changeValue.emit(this.percent);

  }
}
