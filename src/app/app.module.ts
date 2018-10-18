import { NgModule } from '@angular/core';

//Main component
import { AppComponent } from './app.component';
//Components
import { LoginComponent } from './login/login.component';
import { NoPageFoundComponent } from './shared/no-page-found/no-page-found.component';
import { RegisterComponent } from './pages/register/register.component';
//Modules
import { BrowserModule } from "@angular/platform-browser";
import {FormsModule} from '@angular/forms';
import { PagesModule } from "./pages/pages.module";
//Routes
import { APPROUTES } from "./app.routes";




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NoPageFoundComponent,
    RegisterComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    APPROUTES,
    PagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
