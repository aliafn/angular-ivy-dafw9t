import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';

@NgModule({
  imports: [BrowserModule, FormsModule, PassengerDashboardModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
