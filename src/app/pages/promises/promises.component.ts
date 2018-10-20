import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: []
})
export class PromisesComponent implements OnInit {

  constructor() {
  
    this.countThree()
        .then((mensaje)=>{console.log('THE END',mensaje)})
        .catch(error=>{console.error('ERROR',error)})
   }

  ngOnInit() {
  }

  countThree(): Promise<boolean> {

    return new Promise((resolve, reject) => {

      let contador = 0;

      let interval = setInterval(() => {
        contador += 1;
        console.log(contador);
        if (contador == 3) {
          resolve(true);
          clearInterval(interval);
        }
      }, 1000);
    });
  }
}
