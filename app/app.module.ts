import { PassengerDashboardModule } from './passenger-dashboard/containers/passenger-dashboard.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    PassengerDashboardModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}