import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './History/history/history.component';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { LoginComponent } from './Login/login/login.component';
import { NewcompComponent } from './newcomp/newcomp.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'newcomp', component:NewcompComponent},
  {path:'history', component:HistoryComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
