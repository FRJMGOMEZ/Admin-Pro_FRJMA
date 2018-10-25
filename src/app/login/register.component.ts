import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router,ActivationEnd } from '@angular/router';
import { filter ,map} from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from "@angular/platform-browser";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import swal from "sweetalert";
import { UserService } from '../providers/services.index';
import { User } from '../models/user.model';


declare function initPluggins()

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./login.component.css"]
})
export class RegisterComponent implements OnInit {

  form:FormGroup

  constructor(
    public router: Router,
    public headerTitle: Title,
    private meta: Meta,
    public _userService:UserService
  ) {

    this.getDataRoute().subscribe(event => {
      this.headerTitle.setTitle(event.title);
      const metaTag: MetaDefinition = {
        name: event.description,
        content: event.title
      };
      this.meta.updateTag(metaTag);
    });

  }

  ngOnInit() {

    this.form = new FormGroup({
      name:new FormControl(null,Validators.required),
      email:new FormControl(null,[Validators.required,Validators.email]),
      password:new FormControl(null,Validators.required),
      password2: new FormControl(null,Validators.required),
      conditions:new FormControl(false)},
    
    {validators:this.areTheyEqual('password','password2')})

    this.form.setValue({
      name:'User',
      email:'user@gmail.com',
      password:'12345',
      password2:'12345',
      conditions:false
    })
    
    initPluggins();
  }

    registerUser(){

      if(this.form.invalid){
        return
      }

      if(!this.form.value.conditions){

         swal('Important','You must agree our policy terms','warning');
         return 
      }

      let userForm= this.form.value;

      let user = new User(userForm.name, userForm.email, userForm.password);

      this._userService.createUser(user).subscribe((data)=>{this.router.navigate(['/login'])})
      
    //console.log(this.form.value)
    //console.log(this.form.valid)
    
  }

    areTheyEqual(field1:string,field2:string){
      return (group:FormGroup) =>{
        let pass1 = group.controls[field1].value;
        let pass2 = group.controls[field2].value;
        if(pass1===pass2){return null}
        else{
          return {areTheyEqual:true}
        }

      }
    }

  getDataRoute() {
    return this.router.events.pipe(
      filter(event => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map((event: ActivationEnd) => event.snapshot.data)
    );
  }
}