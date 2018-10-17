import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { NoPageFoundComponent } from './shared/no-page-found/no-page-found.component';
import { RegisterComponent } from './pages/register/register.component';

const ROUTES: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "**", component: NoPageFoundComponent }
];
  
export const APPROUTES = RouterModule.forRoot(ROUTES, {useHash:true});
