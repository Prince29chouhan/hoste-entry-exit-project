import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { EmptyComponent } from './empty/empty.component';
import { LoginComponent } from './Login/login/login.component';
import { NewcompComponent } from './info/newcomp.component';
import { HistoryComponent } from './History/history/history.component';
import { TestapiComponent } from './TestApi/testapi/testapi.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'info', component:NewcompComponent},
  {path:'empty', component:EmptyComponent},
  {path:'history', component:HistoryComponent},
  {path:'testapi', component:TestapiComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
