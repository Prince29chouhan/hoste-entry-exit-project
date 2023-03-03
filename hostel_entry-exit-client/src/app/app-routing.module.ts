import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { EmptyComponent } from './empty/empty.component';
import { LoginComponent } from './Login/login/login.component';
import { NewcompComponent } from './info/newcomp.component';
import { HistoryComponent } from './History/history/history.component';
import { TestapiComponent } from './TestApi/testapi/testapi.component';
import { DashbComponent } from './dashb/dashb.component';

const routes: Routes = [
  {path:'', redirectTo:"login" ,pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'info', component:NewcompComponent},
  {path:'history', component:HistoryComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
