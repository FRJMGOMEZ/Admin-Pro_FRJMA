import { Component, OnInit,OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import {retry,map,filter} from 'rxjs/operators';


@Component({
  selector: "app-rxjs",
  templateUrl: "./rxjs.component.html",
  styles: []
})
export class RxjsComponent implements OnDestroy {

  subscription: Subscription;

  constructor() {

    this.subscription = this.observablereturn()
      //.pipe(retry(2))
      .subscribe(
        number => {
          console.log("Subs", number);
        },
        error => {
          console.error("ERROR");
        },
        () => {
          console.log("Observer end");
        }
      );
  }

  observablereturn(): Observable<any> {
    return new Observable((observer: Subscriber<any>) => {
      let contador = 0;

      let interval = setInterval(() => {
        contador += 1;

        const data = { value: contador };

        observer.next(data);

        //if (contador == 3) {
        //clearInterval(interval);
        //observer.complete();
        //}
        //if (contador == 2) {
        //observer.error("ERROR");
        //clearInterval(interval);
        //}
      }, 1000);
    }).pipe(
      map(resp => resp.value),
      filter((resp, index) => {
        if (resp % 2 === 1) {
          //inpar
        } else {
          //par
          return true;
        }
      })
    );
  }

  ngOnDestroy() {

    this.subscription.unsubscribe();
  }
}
