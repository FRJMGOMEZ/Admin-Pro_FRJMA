import { NgModule } from '@angular/core';

//Main component
import { AppComponent } from './app.component';

//Components
import { LoginComponent } from './login/login.component';
import { NoPageFoundComponent } from './shared/no-page-found/no-page-found.component';
import { RegisterComponent } from './login/register.component';

//Modules from @angular
import { BrowserModule } from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

//Modules(customized)
import { PagesModule } from "./pages/pages.module";
import { ProvidersModule } from "./providers/providers.module";

//Routes
import { APPROUTES } from "./app.routes";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NoPageFoundComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    APPROUTES,
    PagesModule,
    ProvidersModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
