import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { NoPageFoundComponent } from './shared/no-page-found/no-page-found.component';
import { RegisterComponent } from './login/register.component';

const ROUTES: Routes = [
  {
    path: "login",
    component: LoginComponent,
    data: { title: "LOGIN", description: "Login" }
  },
  {
    path: "register",
    component: RegisterComponent,
    data: { title: "REGISTER", description: "Register" }
  },
  { path: "**", component: NoPageFoundComponent }
];
  
export const APPROUTES = RouterModule.forRoot(ROUTES, {useHash:true});
