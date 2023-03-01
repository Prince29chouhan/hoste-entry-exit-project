import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { LoginComponent } from './Login/login/login.component';
import { DashbComponent } from './dashb/dashb.component';
import { NewcompComponent } from './info/newcomp.component';
import { HistoryComponent } from './History/history/history.component';
import { EmptyComponent } from './empty/empty.component';
import { TestapiComponent } from './TestApi/testapi/testapi.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    DashbComponent,
    NewcompComponent,
    HistoryComponent,
    
    EmptyComponent,
          TestapiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
