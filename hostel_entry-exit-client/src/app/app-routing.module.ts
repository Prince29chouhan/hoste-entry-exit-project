import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { EmptyComponent } from './empty/empty.component';
import { LoginComponent } from './Login/login/login.component';
import { NewcompComponent } from './newcomp/newcomp.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'newcomp', component:NewcompComponent},
  {path:'empty', component:EmptyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
