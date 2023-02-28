import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { LoginComponent } from './Login/login/login.component';
import { DashbComponent } from './dashb/dashb.component';
import { NewcompComponent } from './newcomp/newcomp.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    DashbComponent,
    NewcompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
