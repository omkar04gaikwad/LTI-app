import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeeklyComponent } from './weekly/weekly.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from "./auth.guard";
import { WeeklyformComponent } from './weeklyform/weeklyform.component';
import { HeaderComponent } from './header/header.component';
import { UpdateComponent } from './update/update.component';
const routes: Routes = [
  {
    path:'createform',
    component: WeeklyComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'register',
    component : RegisterComponent
  },
  {
    path:'login',
    component : LoginComponent
  },
  {
    path:'getdata',
    component : WeeklyformComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'',
    component: HeaderComponent
  },
  {
    path:'update/:id',
    component: UpdateComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
