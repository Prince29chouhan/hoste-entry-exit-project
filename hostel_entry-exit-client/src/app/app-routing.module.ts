import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbComponent } from './dashb/dashb.component';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { LoginComponent } from './Login/login/login.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'dashboard', component:DashbComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
