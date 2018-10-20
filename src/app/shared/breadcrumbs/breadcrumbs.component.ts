import { Component} from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter ,map} from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';


@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent  {

  title:string;

  constructor(public router:Router, public headerTitle:Title,private meta:Meta) {
    
    this.getDataRote().subscribe(event=>{
                                  this.title=event.title;
                                  this.headerTitle.setTitle(this.title);
                                  const metaTag:MetaDefinition={
                                    name:event.description,
                                    content:this.title};
                                  this.meta.updateTag(metaTag)})
}

getDataRote(){

return this.router.events.pipe(filter(event=> event instanceof ActivationEnd),
                            filter((event:ActivationEnd)=>event.snapshot.firstChild === null),
                            map((event:ActivationEnd)=>event.snapshot.data)
                            )

}
}
